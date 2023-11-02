const PhongHoc = require('../model/PhongHocModel');
const Tang = require('../model/TangModel');


exports.getPhongTheoTang = async (req, res, next) => {
    try {
        const data = await PhongHoc.find({ tang: req.params.id });
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
exports.addPhong = async (req, res, next) => {
    try {
         const tang = await Tang.find({ _id: req.body.tang })
        if (tang) {
            const data = await PhongHoc.create(req.body)
            res.status(500).json({
                status: 'true',
                data
            })
        } else {
            res.status(500).json({
                status: 'false1'
            })
        }
       
    } catch (error) {
        res.status(500).json({
            status: 'false'
        })
    }
    
}
exports.deletePhong = async (req, res, next) => {
    try {
        const data = await PhongHoc.deleteOne({ _id: req.params.id })
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
