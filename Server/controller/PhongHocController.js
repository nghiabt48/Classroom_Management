const PhongHoc = require('../model/PhongHocModel');
const Tang = require('../model/TangModel');

exports.getPhong = async (req, res, next) => {
    try {
        const data = await PhongHoc.find();
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
exports.getPhongTheoTang = async (req, res, next) => {
    try {
        const data = await PhongHoc.find({ tang: req.params.id });
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
exports.addPhong = async (req, res, next) => {
    try {
        const tang = await Tang.findOne({ _id: req.body.tang })

        const data = await PhongHoc.create({
            tenPhong: req.body.tenPhong,
            tang: tang._id
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
exports.deletePhong = async (req, res, next) => {
    try {
        const data = await PhongHoc.deleteOne({ _id: req.params.id })
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
exports.getPhongTheoToa = async (req, res, next) => {
    try {
        res.status(200).json({
            status: 'success',
            data: await PhongHoc.find({tenPhong: {$regex: new RegExp(`^${req.params.toa}`)}}) 
        })
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            message: err
        })
    }
}

