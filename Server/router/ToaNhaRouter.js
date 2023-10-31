const express = require('express');
var router = express.Router();
const ToaNhaControler = require('../controller/ToaNhaControler')

router.get('/', ToaNhaControler.getToaNha)
router.get('/:id', ToaNhaControler.getToaNhaTheoCoSo)
router.post('/', ToaNhaControler.addToaNha)
router.delete('/:id', ToaNhaControler.deleteToaNha)
module.exports = router