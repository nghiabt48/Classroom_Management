const express = require('express');
var router = express.Router();
const PhongControler = require('../controller/PhongHocControler')

router.get('/:id', PhongControler.getPhongTheoTang)
router.post('/', PhongControler.addPhong)
router.delete('/:id', PhongControler.deletePhong)
module.exports = router