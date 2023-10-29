const mongoose = require('mongoose')
const currentTimestamp = Date.now(); 
const offsetHours = 7; 
const date = new Date(currentTimestamp + offsetHours * 60 * 60 * 1000);

const SuCoSchema = new mongoose.Schema({
    tenSuCo: String,
    loaiSuCo: {
        type: [mongoose.Types.ObjectId],
        ref: 'LoaiSuCo'
    },
    trangThai: String,
    loaiSuCo: String,
    trangThai: {
        type: String,
        enum: ['Pending', 'Processing', 'Completed'],
        default: 'Pending'
      },
    hinhAnh: String,
    moTa: String,
    created_at: {
        type: Date,
        default: date.toLocaleString()
    },
    phongHoc: {
        type: mongoose.Types.ObjectId,
        ref: 'PhongHoc'
    },
    giangVien: {
        type: mongoose.Types.ObjectId,
        ref: 'GiangVien'
    },
    thoiGianTiepNhan: Date,
    thoiGianHoanThanh: Date
})
const SuCo = mongoose.model('SuCo', SuCoSchema)
module.exports = SuCo