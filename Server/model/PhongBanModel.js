const mongoose = require('mongoose')

const PhongBanSchema = new mongoose.Schema({
    ten: {
        type: String,
        enum: ['ky_thuat', 'IT']
    },
    sdt: String,
    quyen: {
        type: [String]
    },
    mail: String
})
const PhongBan = mongoose.model('PhongBan', PhongBanSchema)
module.exports = PhongBan