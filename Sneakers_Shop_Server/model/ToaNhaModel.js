const mongoose = require('mongoose')

const ToaNhaSchema = new mongoose.Schema({
    tenToa: String,
    coSo: {
        type: [mongoose.Types.ObjectId],
        ref: 'CoSo'
      },
   
})
const ToaNha = mongoose.model('ToaNha', ToaNhaSchema)
module.exports = ToaNha