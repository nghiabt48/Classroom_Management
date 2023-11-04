const express = require('express');
const router = express.Router()
const suCoController = require('./../controller/SuCoController')
const AuthController = require('./../controller/AuthController')


router.get('/loai', suCoController.getAllLoaiSuCo)
router.use(AuthController.protect)
router.route('/add')
  .post(suCoController.uploadProblemImage)
  .post(suCoController.saveProblemImageToStorage)
  .post(suCoController.createSuCo)
router.get('/search', suCoController.getSuCo)

module.exports = router