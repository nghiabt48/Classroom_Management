const mongoose = require('mongoose')

const PhongBanSchema = new mongoose.Schema({
    ten: String,
    sdt: String,
    quyen: String,
    mail: String
})
const PhongBan = mongoose.model('PhongBan', PhongBanSchema)
module.exports = PhongBan