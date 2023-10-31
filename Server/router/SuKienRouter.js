const express = require('express');
var router = express.Router();
const SuKienControler = require('../controller/SuKienControler')

router.get('/', SuKienControler.getSuKien)
router.post('/', SuKienControler.addSuKien)
router.delete('/:id', SuKienControler.deleteSuKien)
module.exports = router