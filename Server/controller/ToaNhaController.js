const ToaNha = require('../model/ToaNhaModel')
const CoSo = require('../model/CoSoModel')

exports.getToaNha = async (req, res, next) => {
    try {
        const data = await ToaNha.find();
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
exports.getToaNhaTheoCoSo = async (req, res, next) => {
    try {
        const data = await ToaNha.find({ co_so: req.params.id });
        res.status(200).json({
            status: 'success',
            data
        })
    } catch (error) {
        res.status(500).json({
            status: 'failed'
        })
    }
}
exports.addToaNha = async (req, res, next) => {
    try {
        const co_So = await CoSo.findOne({ _id: req.body.co_so })
        console.log(co_So)
        const data = await ToaNha.create({
            ten_toa: req.body.ten_toa,
            co_so: co_So._id
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
exports.deleteToaNha = async (req, res, next) => {
    try {
        const data = await ToaNha.deleteOne({ _id: req.params.id })
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
