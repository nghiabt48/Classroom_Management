const mongoose = require('mongoose')

const TaiSanPhongHocSchema = new mongoose.Schema({
    kiem_tra_ngay: Date,
    so_luong_thuc: Number,
    tai_san: {
        type: [mongoose.Types.ObjectId],
        ref: 'TaiSan'
    },
    phong_hoc: {
        type: [mongoose.Types.ObjectId],
        ref: 'PhongHoc'
    },
})
const TaiSanPhongHoc = mongoose.model('TaiSanPhongHoc', TaiSanPhongHocSchema)
module.exports = TaiSanPhongHoc