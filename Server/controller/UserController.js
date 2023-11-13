const User = require("../model/UserModel.js");
const SuCo = require("../model/SuCoModel.js");
const catchAsync = require("../utils/catchAsync");
exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};
exports.getUser = catchAsync(async (req, res, next) => {
  let query = User.findById(req.params.id);
  const user = await query;
  if (!user) return next(new AppError("User with this id not found", 404));
  res.status(200).json({
    status: "success",
    user,
  });
});
exports.getMyProblems = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: "success",
    su_co: await SuCo.find({ user: req.params.id }).populate(
      "loaiSuCo",
      "ten phong_tiep_nhan"
    ),
  });
});

// users/nhan-vien/tiep-nhan/:sucoId
exports.tiepNhanSuCo = catchAsync(async(req, res, next) => {
  const suCo = await SuCo.findById(req.params.id)
  if(suCo.trangThai == "Pending") {
    await SuCo.findOneAndUpdate(suCo.id, {
      trangThai: 'Processing',
      thoi_gian_tiep_nhan: new Date(Date.now() + 7 * 60 * 60 * 1000),
      nhan_vien_tiep_nhan: req.user.id
    })
  }
  else {
    return new AppError('Trạng thái của sự cố phải là Pending.', 400)
  }
})


