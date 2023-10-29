const express = require('express');
const router = express.Router();
const CoSoModel = require('../model/CoSoModel')

router.post("/",(req,res)=>{
    var ten = req.body.ten
    var diachi = req.body.diachi

    CoSoModel.create({
        tenCoSo: ten,
        diaChi: diachi
    })
    try {
        res.json('thanh cong')
    } catch (error) {
        res.json('that bai')
    }
})
module.exports = router