const express = require('express');
var router = express.Router();
const TangControler = require('../controller/TangControler')

router.get('/:id', TangControler.getTangTheoToaNha)
router.post('/', TangControler.addTang)
router.delete('/:id', TangControler.deleteTang)
module.exports = router