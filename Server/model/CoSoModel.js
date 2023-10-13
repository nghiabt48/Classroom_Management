const mongoose = require('mongoose')

const CoSoSchema = new mongoose.Schema({
    tenCoSo: String,
    diaChi:String,
   
})
const CoSo = mongoose.model('CoSo', CoSoSchema)
module.exports = CoSo