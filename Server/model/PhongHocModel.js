const mongoose = require('mongoose')

const PhongHocSchema = new mongoose.Schema({
  tenPhong: String,
  tang: {
    type: mongoose.Types.ObjectId,
    ref: 'tang'
  }
})
const PhongHoc = mongoose.model('PhongHoc', PhongHocSchema)
module.exports = PhongHoc