const mongoose = require('mongoose')

const SuKienSchema = new mongoose.Schema({
    title: String,
    thoiGian: Date,
    phongBan: String,
    moTa: String,
    diaDiem: String,
    hinhAnh: String
})
const SuKien = mongoose.model('SuKien', SuKienSchema)
module.exports = SuKien