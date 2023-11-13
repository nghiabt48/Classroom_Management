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
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    thoi_gian_tiep_nhan: Date,
    thoi_gian_hoan_thanh: Date,
    danh_gia: {
        thoi_gian: Date,
        mo_ta: String
    },
    nhan_vien_tiep_nhan: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})
const SuCo = mongoose.model('SuCo', SuCoSchema)
module.exports = SuCo