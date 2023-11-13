const mongoose = require('mongoose')

const GiangVienSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: String,
  coSo: {
    type: mongoose.Types.ObjectId,
    ref: 'CoSo'
  },
  picture: String,
  auth_role: {
    type: String,
    enum: ['GiangVien', 'NhanVien', 'Manager'],
    default: 'GiangVien'
  },
  isLogin: Boolean
})
const GiangVien = mongoose.model('GiangVien', GiangVienSchema)
module.exports = GiangVien