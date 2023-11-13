const mongoose = require('mongoose')

const CoSoSchema = new mongoose.Schema({
    ten_co_so: String,
    dia_chi: String

})
const CoSo = mongoose.model('CoSo', CoSoSchema)
module.exports = CoSo