const Tang = require('../model/TangModel');
const ToaNha = require('../model/ToaNhaModel');

exports.getTang = async (req, res, next) => {
    try {
        const data = await Tang.find();
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
exports.getTangTheoToaNha = async (req, res, next) => {
    try {
        const data = await Tang.find({ toa_nha: req.params.id });
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
exports.addTang = async (req, res, next) => {
    try {
        const Toa = await ToaNha.findOne({ ten_toa: req.body.toaNha })
        const data = await Tang.create({
            ten_tang: req.body.ten_tang,
            toa_nha: Toa._id
        })
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
exports.deleteTang = async (req, res, next) => {
    try {
        const data = await Tang.deleteOne({ _id: req.params.id })
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
