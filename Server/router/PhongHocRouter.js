const express = require('express');
var router = express.Router();
const PhongControler = require('../controller/PhongHocController')

router.get('/getPhong', PhongControler.getPhong)
router.get('/getTheoTang/:id', PhongControler.getPhongTheoTang)
router.post('/createPhong', PhongControler.addPhong)
router.delete('/deletePhong/:id', PhongControler.deletePhong)
router.get('/:toa', PhongControler.getPhongTheoToa)
module.exports = router