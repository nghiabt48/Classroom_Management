const mongoose = require('mongoose')

const ToaNhaSchema = new mongoose.Schema({
  ten_toa: String,
  co_so: {
    type: mongoose.Types.ObjectId,
    ref: 'CoSo'
  }

})
const ToaNha = mongoose.model('ToaNha', ToaNhaSchema)
module.exports = ToaNha