const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: String,
  co_so: {
    type: mongoose.Types.ObjectId,
    ref: 'CoSo'
  },
  picture: String,
  auth_role: {
    type: String,
    enum: ['GiangVien', 'NhanVien', 'Manager'],
    default: 'GiangVien'
  },
  phong_ban: {
    type: mongoose.Types.ObjectId,
    ref: 'PhongBan'
},
})
const User = mongoose.model('User', UserSchema)
module.exports = User