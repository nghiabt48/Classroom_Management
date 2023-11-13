const express = require('express');
var router = express.Router();
const SuKienControler = require('../controller/SuKienController')

router.get('/getSuKien', SuKienControler.getSuKien)
router.post('/createSuKien', SuKienControler.addSuKien)
router.delete('/deleteSuKien/:id', SuKienControler.deleteSuKien)
module.exports = router