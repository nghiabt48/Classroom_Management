const mongoose = require('mongoose')

const TaiSanPhongHocSchema = new mongoose.Schema({
    kiemTraNgay: Date,
    SoLuongThuc: Number,
    taiSan: {
        type: [mongoose.Types.ObjectId],
        ref: 'TaiSan'
    },
    phongHoc: {
        type: [mongoose.Types.ObjectId],
        ref: 'PhongHoc'
    },
})
const TaiSanPhongHoc = mongoose.model('TaiSanPhongHoc', TaiSanPhongHocSchema)
module.exports = TaiSanPhongHoc