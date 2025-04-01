const express = require('express')
const { userSignup, updateUserPassword, userLogin } = require('../controller/user-controller')

const router = express.Router()

router.post('/signup',userSignup)
router.post('/login',userLogin)
router.post('/update-password',updateUserPassword)

module.exports = router