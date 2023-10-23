const mongoose = require('mongoose')

const ManagerSchema = new mongoose.Schema({
    ten: String,
    email: String,
    coSo: {
        type: [mongoose.Types.ObjectId],
        ref: 'CoSo'
    },
    auth_role: String
})
const Manager = mongoose.model('LoaiSuCo', ManagerSchema)
module.exports = Manager