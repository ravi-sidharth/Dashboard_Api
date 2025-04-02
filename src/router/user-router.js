const express = require('express')
const { userSignup, updateUserPassword, userLogin, dashboardReport, userLogout } = require('../controller/user-controller')

const router = express.Router()

router.post('/signup',userSignup)
router.post('/login',userLogin)
router.get('/logout',userLogout)
router.post('/update-password',updateUserPassword)
router.get('/dashboard',dashboardReport)

module.exports = router