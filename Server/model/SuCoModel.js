const mongoose = require('mongoose')

const SuCoSchema = new mongoose.Schema({
    tenSuCo: String,
    loaiSuCo: {
        type: [mongoose.Types.ObjectId],
        ref: 'LoaiSuCo'
    },
    trangThai: String,
    hinhAnh: String,
    moTa: String,
    created_at: String,
    phongHoc: {
        type: [mongoose.Types.ObjectId],
        ref: 'PhongHoc'
    },
    giangVien: {
        type: [mongoose.Types.ObjectId],
        ref: 'GiangVien'
    },
    thoiGianTiepNhan: Date,
    thoiGianHoanThanh: Date
})
const SuCo = mongoose.model('SuCo', SuCoSchema)
module.exports = SuCo