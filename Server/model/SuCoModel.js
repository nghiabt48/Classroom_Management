const mongoose = require('mongoose')
const currentTimestamp = Date.now(); 
const offsetHours = 7; 
const date = new Date(currentTimestamp + offsetHours * 60 * 60 * 1000);

const SuCoSchema = new mongoose.Schema({
    loaiSuCo: {
        type: mongoose.Types.ObjectId,
        ref: 'LoaiSuCo'
    },
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
    phongHoc: String,
    giangVien: {
        type: mongoose.Types.ObjectId,
        ref: 'GiangVien'
    },
    thoiGianTiepNhan: Date,
    thoiGianHoanThanh: Date,
    danh_gia: {
        phong: String,
        thoi_gian: Date,
        mo_ta: String
    }
})
const SuCo = mongoose.model('SuCo', SuCoSchema)
module.exports = SuCo