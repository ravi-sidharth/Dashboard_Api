const jwt = require('jsonwebtoken')

const validateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    if (!token) {
        console.log('Access attempt without valid token')
        return res.status(401).json({
            success: false,
            message: 'Login is required!'
        })
    }

    jwt.verify(token, process.env.SECRET, (err, user) => {
        if (err) {
            console.error('Invalid token!')
            return res.status(403).json({
                success: false,
                message: 'invalid token!!'
            })
        }
        req.user = user;
        next();
    })
}

module.exports = validateToken