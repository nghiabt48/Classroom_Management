const User = require("../model/GiangVienModel.js");
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
    su_co: await SuCo.find({ giangVien: req.params.id }).populate(
      "loaiSuCo",
      "ten phong_tiep_nhan"
    ),
  });
});
