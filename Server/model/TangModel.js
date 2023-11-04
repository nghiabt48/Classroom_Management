const mongoose = require('mongoose')

const TangSchema = new mongoose.Schema({
  tenTang: String,
  toaNha: {
    type: mongoose.Types.ObjectId,
    ref: 'ToaNha'
  }
})
const Tang = mongoose.model('Tang', TangSchema)
module.exports = Tang