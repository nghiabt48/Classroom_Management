const mongoose = require('mongoose')

const NhanVienSchema = new mongoose.Schema({
    ten: String,
    sdt: String,
    mail: String,
    auth_role: String,
    suCo: {
        type: [mongoose.Types.ObjectId],
        ref: 'SuCo'
    },
    coSo: {
        type: [mongoose.Types.ObjectId],
        ref: 'CoSo'
    },
    phongBan: {
        type: [mongoose.Types.ObjectId],
        ref: 'PhongBan'
    },
    auth_role: String
})
const NhanVien = mongoose.model('NhanVien', NhanVienSchema)
module.exports = NhanVien