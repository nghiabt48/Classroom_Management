const mongoose = require('mongoose')

const PhongHocSchema = new mongoose.Schema({
    tenPhong: String,
    tang:String,
    toaNha: {
        type: [mongoose.Types.ObjectId],
        ref: 'ToaNha'
      },
})
const PhongHoc = mongoose.model('PhongHoc', PhongHocSchema)
module.exports = PhongHoc