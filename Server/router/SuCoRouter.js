const express = require('express');
const router = express.Router()
const suCoController = require('./../controller/SuCoController')

router.post('/add', suCoController.createSuCo)
router.get('/search', suCoController.getSuCo)

module.exports = router