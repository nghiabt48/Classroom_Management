const SuCo = require('../model/SuCoModel')
const LoaiSuCo = require('../model/LoaiSuCoModel')
// Create new
exports.createSuCo = async (req, res, next) => {
  try {
    const loai_su_co = await LoaiSuCo.findOne({ten: req.body.loaiSuCo})
    const suCo = await SuCo.create({
      loaiSuCo: loai_su_co._id,
      hinhAnh: req.body.hinhAnh ? req.body.hinhAnh : "",
      moTa: req.body.moTa ? req.body.moTa : "",
      phongHoc: req.body.phongHoc,
      giangVien: req.user.id
    }) 
    res.status(201).json({
      status: 'success',
      data: suCo
    })
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message
    })
  }
}
exports.getAllLoaiSuCo = async(req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      data: await LoaiSuCo.find()
    })
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message
    })
  }
}
exports.getSuCo = async (req, res) => {
  try {
    const userId = req.query.user_id
    const suCo = await SuCo.find({giangVien: userId})
    res.status(200).json({
      status: 'success',
      data: suCo
    })
  }
  catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message
    })
  }
}