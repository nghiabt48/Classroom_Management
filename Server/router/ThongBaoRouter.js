const express = require('express');
var router = express.Router();
var ThongBaoControler = require('../controller/ThongBaoControler')

router.get('/getThongBao', ThongBaoControler.getAll)
router.post('/createThongBao', ThongBaoControler.addThongBao)
router.delete('/deleteThongBao/:id', ThongBaoControler.deleteThongbao)
router.get('/getCTThongBao/:id', ThongBaoControler.getCT)
module.exports = router