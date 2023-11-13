const mongoose = require('mongoose')

const SuKienSchema = new mongoose.Schema({
    title: String,
    thoi_gian: Date,
    phong_ban: {
        type: mongoose.Types.ObjectId,
        ref: 'PhongBan'
    },
    mo_ta: String,
    dia_diem: String,
    hinh_anh: String
})
const SuKien = mongoose.model('SuKien', SuKienSchema)
module.exports = SuKien