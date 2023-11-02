const express = require('express');
var router = express.Router();
const ToaNhaControler = require('../controller/ToaNhaController')

router.get('/getToa', ToaNhaControler.getToaNha)
router.get('/getTheoCoSo/:id', ToaNhaControler.getToaNhaTheoCoSo)
router.post('/createToa', ToaNhaControler.addToaNha)
router.delete('/deleteToa/:id', ToaNhaControler.deleteToaNha)
module.exports = router