const express = require('express')
const { userSignup, updateUserPassword, userLogin, dashboardReport, userLogout } = require('../controller/user-controller')
const validateToken = require('../middleware/auth-middleware')

const router = express.Router()

router.post('/signup',userSignup)
router.post('/login',userLogin)
router.post('/logout',userLogout)
router.post('/update-password',updateUserPassword)
router.get('/dashboard',validateToken,dashboardReport)

module.exports = router