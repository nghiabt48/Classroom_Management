const express = require('express');
const router = express.Router()
const suCoController = require('./../controller/SuCoController')
const AuthController = require('./../controller/AuthController')


router.get('/loai', suCoController.getAllLoaiSuCo)
router.get('/', suCoController.getAllSuCo)
router.route('/phong-ban/:phong_tiep_nhan').get(suCoController.locSuCoTheoPhongBan)
router.use(AuthController.protect)
router.route('/image-upload')
  .post(suCoController.uploadProblemImage)
  .post(suCoController.saveProblemImageToStorage)
router.route('/add')
  .post(suCoController.createSuCo)

module.exports = router