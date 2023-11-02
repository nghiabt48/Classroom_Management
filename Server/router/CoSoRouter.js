const express = require('express');
var router = express.Router();
const CoSoController = require('../controller/CoSoController')

router.get('/getCoSo', CoSoController.getAll)
router.post('/createCoSo', CoSoController.addCoSo)
router.delete('/deleteCoSo/:id',CoSoController.deleteCoSo)
module.exports = router