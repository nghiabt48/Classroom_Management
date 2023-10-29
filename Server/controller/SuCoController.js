const SuCo = require('../model/SuCoModel')
// Create new
exports.createSuCo = async (req, res, next) => {
  try {
    const suCo = await SuCo.create(req.body)
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