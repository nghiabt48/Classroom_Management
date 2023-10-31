const SuKien = require('../model/SuKienModel')

exports.getSuKien = async (req, res, next) => {
    try {
        const data = await SuKien.find();
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
exports.addSuKien = async (req, res, next) => {
    try {
        const data = await SuKien.create(req.body)
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
exports.deleteSuKien = async (req, res, next) => {
    try {
        const data = await SuKien.deleteOne({_id: req.params.id})
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
