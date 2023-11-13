const mongoose = require('mongoose')

const LoaiSuCoSchema = new mongoose.Schema({
    ten: String,
    phong_tiep_nhan: {
        type: String,
        enum: ['ky_thuat', 'IT']
    }
})
const LoaiSuCo = mongoose.model('LoaiSuCo', LoaiSuCoSchema)
module.exports = LoaiSuCo