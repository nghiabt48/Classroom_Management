const mongoose = require('mongoose')
const { datetongbao } = require('../controller/ThongBaoControler')

const ThongBaoSchema = new mongoose.Schema({
    thoiGian: Date,
    title: String,
    noiDung: String,
    nguoiDang: String,  
})
const ThongBao = mongoose.model('ThongBao', ThongBaoSchema)
module.exports = ThongBao