const express = require('express');
var router = express.Router();
const CoSoController = require('../controller/CoSoController')

router.get('/', CoSoController.getAll)
router.post('/', CoSoController.addCoSo)
router.delete('/:id',CoSoController.deleteCoSo)
module.exports = router