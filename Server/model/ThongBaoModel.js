const mongoose = require('mongoose')

const ThongBaoSchema = new mongoose.Schema({
    thoiGian: String,
    title: String,
    noiDung: String,
    manager: {
        type: [mongoose.Types.ObjectId],
        ref: 'Manager'
    }
    
})
const ThongBao = mongoose.model('ThongBao', ThongBaoSchema)
module.exports = ThongBao