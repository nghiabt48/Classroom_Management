const CoSo = require('../model/CoSoModel')

exports.getAll = async (req, res, next) => {
    try {
        const data = await CoSo.find();
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
exports.addCoSo = async (req, res, next) => {
    try {
        const data = await CoSo.create(req.body);
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
exports.deleteCoSo = async (req, res, next) => {
    try {
        const data = await CoSo.deleteOne({ _id: req.params.id })
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