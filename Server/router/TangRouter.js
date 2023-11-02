const express = require('express');
var router = express.Router();
const TangControler = require('../controller/TangController')

router.get('/getTheoToa/:id', TangControler.getTangTheoToaNha)
router.post('/createTang', TangControler.addTang)
router.delete('/deleteTang/:id', TangControler.deleteTang)
module.exports = router