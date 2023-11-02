const Tang = require('../model/TangModel');
const ToaNha = require('../model/ToaNhaModel');


exports.getTangTheoToaNha = async (req, res, next) => {
    try {
        const data = await Tang.find({ toaNha: req.params.id });
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
exports.addTang = async (req, res, next) => {
    try {
        const Toa = await ToaNha.find({ _id: req.body.toaNha })
        if (Toa) {
            const data = await Tang.create(req.body)
            res.status(500).json({
                status: 'true',
                data
            })
        } else {
            res.status(500).json({
                status: 'false'
            })
        }

    } catch (error) {
        res.status(500).json({
            status: 'false'
        })
    }
}
exports.deleteTang = async (req, res, next) => {
    try {
        const data = await Tang.deleteOne({ _id: req.params.id })
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
