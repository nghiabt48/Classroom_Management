const express = require('express');
const router = express.Router()
const suCoController = require('./../controller/SuCoController')
const AuthController = require('./../controller/AuthController')


router.get('/loai', suCoController.getAllLoaiSuCo)
router.use(AuthController.protect)
router.post('/add', suCoController.createSuCo)
router.get('/search', suCoController.getSuCo)

module.exports = router