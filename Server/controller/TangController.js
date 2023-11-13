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
        const data = await Tang.find({ toaNha: req.params.id });
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
        const Toa = await ToaNha.findOne({ tenToa: req.body.toaNha })
        const data = await Tang.create({
            tenTang: req.body.tenTang,
            toaNha: Toa._id
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
