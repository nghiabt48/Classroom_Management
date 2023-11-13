const TaiSan = require('../model/TaiSanModel')

exports.getTaiSan = async (req, res, next) => {
    try {
        const data = await TaiSan.find();
        res.status(500).json({
            status: 'success',
            data
        })
    } catch (error) {
        res.status(500).json({
            status: 'failed'
        })
    }
}
exports.addTaiSan = async (req, res, next) => {
    try {
        const data = await TaiSan.create(req.body)
        res.status(500).json({
            status: 'success',
            data
        })
    } catch (error) {
        res.status(500).json({
            status: 'failed'
        })
    }
}
exports.deleteTaiSan = async (req, res, next) => {
    try {
        const data = await TaiSan.deleteOne({_id: req.params.id})
        res.status(500).json({
            status: 'success',
            data
        })
    } catch (error) {
        res.status(500).json({
            status: 'failed'
        })
    }
}