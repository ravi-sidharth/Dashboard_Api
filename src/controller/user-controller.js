const { User } = require("../model/user-model")
const jwt = require('jsonwebtoken')


const userSignup = async(req,res) => {
    try {
        const {username,email,password} = req.body 
        if (!username) {
            return res.status(401).json({
                success:false,
                message:'Username is required!'
            })
        }

        else if(!email) {
            return res.status(401).json({
                success:false,
                message:'Email is required!'
            })
        }

        else if (!password){
            return res.status(401).json({
                success:false,
                message:'Password is required!'
            })
        }

        let user = await User.findOne({email})
        if (user) {
            return res.status(401).json({
                success:false,
                message:'User is already exists, Please try again with another email or usernam!'
            })
        }

        user = new User({
            username,
            email,
            password 
        })
        user.signupCount += 1
        await user.save()
        
        console.log(user)
        res.status(201).json({
            success:true,
            message:'User signup Successfully!',
        })
        
    } catch(e) {
        res.status(500).json({
            message:"Error occured while signup",
            error:e.message,
        })
    }
}

const userLogin = async(req,res) => {
    try {
        const {email,password} = req.body
        if(!email) {
            return res.status(401).json({
                success:false,
                message:'Email is required!'
            })
        }

        else if (!password){
            return res.status(401).json({
                success:false,
                message:'Password is required!'
            })
        }

        const user = await User.findOne({email})
        if (!user) {
            return res.status(404).json({
                success:false,
                message:'User not found!'
            })
        }

        if (password !== user.password) {
            return res.status(429).json({
                success:false,
                message:'Invalid credentials!'
            })
        }

        const payload = {
            _id :user._id,
            username:user.username,
            email:user.email,
        }
        const token = jwt.sign(payload,process.env.SECRET)

        user.loginCount +=1
        await user.save()
        res.status(200).json({
            success:true,
            message:'User logged in successfully!',
            accessToken: token 
        })

        } catch(e) {
        res.status(500).json({
            message:"Error occured while login",
            error:e.message,
        })
    }
}

const updateUserPassword = async(req,res) => {
    try {
        const {email,oldPassword,newPassword} = req.body 
        const user = await User.findOne(
            {email}
        )
        console.log(user,"user")
        if (user.password !== oldPassword) {
            return res.status(429).json({
                success:false,
                message:'Invalid Password!'
            })
        }
        await User.findByIdAndUpdate(
            user._id,
            {password:newPassword},
            {new:true}
        )
        res.status(200).json({
            success:true,
            message:'Update user password successfully!'
        })


    } catch(e) {
        res.status(500).json({
            message:"Error occured while forgetting the password!",
            error:e.message,
        })
    }
}

const userLogout = async (req, res) => {
    try {
        const {email} = req.body
        const user = await User.findOne({email})
        
        user.logoutCount += 1
        user.loginCount -= 1
        await user.save();

        res.status(200).json({
            success: true,
            message: "User logged out successfully!",
        });
    } catch (e) {
        res.status(500).json({
            message: "Error occurred while logging out",
            error: e.message,
        });
    }
};

const dashboardReport = async (req, res) => {
    try {
      const stats = await User.aggregate([
        {
          $group: {
            _id: null,
            totalSignups: { $sum: "$signupCount" },
            totalLogins: { $sum: "$loginCount" },
            totalLogouts: { $sum: "$logoutCount" },
          },
        },
      ]);
      res.json(stats[0] || { totalSignups: 0, totalLogins: 0, totalLogouts: 0 });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

module.exports = {
    userSignup,
    userLogin,
    userLogout,
    updateUserPassword,
    dashboardReport
}


