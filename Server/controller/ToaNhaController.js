const ToaNha = require('../model/ToaNhaModel')
const CoSo = require('../model/CoSoModel')

exports.getToaNha = async (req, res, next) => {
    try {
        const data = await ToaNha.find();
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
exports.getToaNhaTheoCoSo = async (req, res, next) => {
    try {
        const data = await ToaNha.find({coSo: req.params.id});
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
exports.addToaNha = async (req, res, next) => {
    try {
        const coSo = await CoSo.find({ _id: req.body.coSo })
        if(coSo){
            const data = await ToaNha.create(req.body)
            res.status(500).json({
                status: 'true',
                data
            })
        }else{
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
exports.deleteToaNha = async (req, res, next) => {
    try {
        const data = await ToaNha.deleteOne({_id: req.params.id})
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
