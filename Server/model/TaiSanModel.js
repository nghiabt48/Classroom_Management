const mongoose = require('mongoose')

const TaiSanSchema = new mongoose.Schema({
    ten: String,
    so_luong: Number,
    mo_ta: String
})
const TaiSan = mongoose.model('TaiSan', TaiSanSchema)
module.exports = TaiSan