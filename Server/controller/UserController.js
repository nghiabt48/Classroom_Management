const User = require('../model/GiangVienModel.js')
exports.register = async(req, res, next) => {
  try{
    const newUser = await User.create(req.body)
    res.status(201).json({
      status: 'success',
      user: newUser
    })
  }
  catch(err){
    res.status(400).json({
      status: 'failed',
      message: err.message
    })
  }
}
exports.login = async(req, res, next) => {
  try{
    const user = await User.find({email: req.body.email, password: req.body.password})
    res.status(201).json({
      status: 'success',
      message: 'Login successfully',
      id: user[0]._id
    })
  }
  catch(err){
    res.status(400).json({
      status: 'failed',
      message: "Invalid email or password"
    })
  }
}