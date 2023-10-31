const CoSo = require('../model/CoSoModel')

exports.getAll = async (req, res, next) => {
    try {
        const data = await CoSo.find();
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
exports.addCoSo = async (req, res, next) => {
    try {
        var tenCoSo = req.body.tenCoSo
        var diaChi = req.body.diaChi

        if (tenCoSo && diaChi) {
            const data = await CoSo.create(req.body);
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
exports.deleteCoSo = async (req, res, next) => {
    try {
        const data = await CoSo.deleteOne({ _id: req.params.id })
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