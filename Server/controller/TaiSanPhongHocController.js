const TaiSanPhong = require('../model/TaiSanPhongHocModel')

exports.getTaiSan = async (req, res, next) => {
    try {
        const data = await TaiSanPhong.find();
        res.status(500).json({
            status: 'true',
            data
        })
    } catch (error) {
        res.status(500).json({
            status: 'false'
        })
    }
}
exports.addTaiSan = async (req, res, next) => {
    try {
        const data = await TaiSanPhong.create(req.body)
        res.status(500).json({
            status: 'true',
            data
        })
    } catch (error) {
        res.status(500).json({
            status: 'false'
        })
    }
}
exports.deleteTaiSan = async (req, res, next) => {
    try {
        const data = await TaiSanPhong.deleteOne({_id: req.params.id})
        res.status(500).json({
            status: 'true',
            data
        })
    } catch (error) {
        res.status(500).json({
            status: 'false'
        })
    }
}