const SuKien = require('../model/SuKienModel')

exports.getSuKien = async (req, res, next) => {
    try {
        const data = await SuKien.find();
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
exports.addSuKien = async (req, res, next) => {
    try {
        const data = await SuKien.create({
            title: req.body.title,
            thoiGian: req.body.thoiGian,
            phongBan: req.body.phongBan,
            moTa: req.body.moTa,
            diaDiem: req.body.diaDiem,
            hinhAnh: req.body.hinhAnh ? req.body.hinhAnh : "",
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
exports.deleteSuKien = async (req, res, next) => {
    try {
        const data = await SuKien.deleteOne({_id: req.params.id})
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