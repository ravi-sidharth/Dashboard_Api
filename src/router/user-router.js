const express = require('express')
const { userSignup, updateUserPassword, userLogin, dashboardReport, userLogout, updateInfo } = require('../controller/user-controller')
const validate = require('../middleware/auth-middleware')

const router = express.Router()

router.post('/signup',userSignup)
router.post('/login',userLogin)
router.post('/logout',userLogout)
router.post('/update-password',updateUserPassword)
router.get('/dashboard',validate,dashboardReport)
router.put('/update-info',validate,updateInfo)

module.exports = router