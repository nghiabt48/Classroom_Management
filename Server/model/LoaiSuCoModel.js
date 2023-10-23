const mongoose = require('mongoose')

const LoaiSuCoSchema = new mongoose.Schema({
    ten: String,
    phanLoai: String,
    phongBan: {
        type: [mongoose.Types.ObjectId],
        ref: 'PhongBan'
    },
    auth_role: String
})
const LoaiSuCo = mongoose.model('LoaiSuCo', LoaiSuCoSchema)
module.exports = LoaiSuCo