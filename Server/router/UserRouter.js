const express = require('express');
const router = express.Router()
const UserController = require('../controller/UserController')
const AuthController = require('../controller/AuthController')

router.use(AuthController.protect)
router.get('/me', UserController.getMe, UserController.getUser)
router.get('/me/problems', UserController.getMe, UserController.getMyProblems)
router.get('/me/tiep-nhan', UserController.getMe, UserController.getListSuCoDaTiepNhan)
router.post('/nhan-vien/tiep-nhan/:id', AuthController.restrictTo('NhanVien'), UserController.tiepNhanSuCo)
router.post('/su-co/:id/danh-gia', UserController.danhGiaSuCo)
router.post('/su-co/:id/hoan-thanh', UserController.hoanThanhSuCo)
module.exports = router