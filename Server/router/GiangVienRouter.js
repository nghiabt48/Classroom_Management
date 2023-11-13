const express = require('express');
const router = express.Router()
const UserController = require('./../controller/UserController')
const AuthController = require('./../controller/AuthController')

router.use(AuthController.protect)
router.get('/me', UserController.getMe, UserController.getUser)
router.get('/me/problems', UserController.getMe, UserController.getMyProblems)

module.exports = router