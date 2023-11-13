const mongoose = require('mongoose')

const TaiSanSchema = new mongoose.Schema({
    ten: String,
    soLuong: Number,
    moTa: String
})
const TaiSan = mongoose.model('TaiSan', TaiSanSchema)
module.exports = TaiSan