const express = require('express');
var router = express.Router();
const TaiSanControler = require('../controller/TaiSanController')

router.get('/getTaiSan', TaiSanControler.getTaiSan)
router.post('/createTaiSan', TaiSanControler.addTaiSan)
router.delete('/deleteTaiSan/:id', TaiSanControler.deleteTaiSan)
module.exports = router