const mongoose = require('mongoose')

const TangSchema = new mongoose.Schema({
  ten_tang: String,
  toa_nha: {
    type: mongoose.Types.ObjectId,
    ref: 'ToaNha'
  }
})
const Tang = mongoose.model('Tang', TangSchema)
module.exports = Tang