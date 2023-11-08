const mongoose = require('mongoose')

const GiangVienSchema = new mongoose.Schema({
    ten: String,
    email: String,
    sdt: String,
    coSo: {
        type: [mongoose.Types.ObjectId],
        ref: 'CoSo'
      },
    auth_role: String
})
const GiangVien = mongoose.model('GiangVien', GiangVienSchema)
module.exports = GiangVien