const User = require("../model/UserModel.js");
const SuCo = require("../model/SuCoModel.js");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError.js");
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
    su_co: await SuCo.find({ user: req.params.id })
  });
});

// users/nhan-vien/tiep-nhan/:sucoId
exports.tiepNhanSuCo = catchAsync(async(req, res, next) => {
  const suCo = await SuCo.findById(req.params.id)
  if(suCo.user == req.user.id) {
    return next(new AppError("Không thể tiếp nhận sự cố của mình.", 403))
  }
  if(suCo.trangThai == "Pending") {
    await SuCo.findByIdAndUpdate(suCo.id, {
      trangThai: 'Processing',
      thoi_gian_tiep_nhan: new Date(Date.now() + 7 * 60 * 60 * 1000),
      nhan_vien_tiep_nhan: req.user.id
    })
    res.status(200).json({
      status: "success",
      message: "Tiep nhan su co thanh cong."
    });
  }
  else {
    return next(new AppError('Trạng thái của sự cố phải là Pending.', 400))
  }
})
// user/me/tiep-nhan
exports.getListSuCoDaTiepNhan = catchAsync(async(req, res, next) => {
  res.status(200).json({
    status: "success",
    su_co: await SuCo.find({nhan_vien_tiep_nhan: req.user.id}).populate('user nhan_vien_tiep_nhan')
  });
})
// su-co/:id/danh-gia
exports.danhGiaSuCo = catchAsync(async(req, res, next) => {
  // chỉ được đánh giá sự cố do mình gửi
  const su_co = await SuCo.findById(req.params.id)
  console.log(su_co.user == req.user.id) 
  if(su_co.user != req.user.id) {
    return next(new AppError("Chỉ được đánh giá sự cố do mình gửi", 403))
  }
  // Chỉ được đánh giá 1 lần
  if(su_co.danh_gia.rating >= 1) {
    return next(new AppError("Bạn đã đánh giá sự cố này rồi", 400))
  }
  // Chỉ được đánh giá những sự cố có trạng thái completed
  if(su_co.trangThai != "Completed") {
    return next(new AppError("Sự cố chưa được tiếp nhận hoặc đang được xử lí.", 400))
  }
  await SuCo.updateOne(su_co, {
    danh_gia: {
      thoi_gian: new Date(Date.now() + 7 * 60 * 60 * 1000),
      mo_ta: req.body.mo_ta || "",
      rating: req.body.rating || 1
    }
  })
  return res.status(200).json({
    status: 'success',
    code: 200,
    message: 'Danh gia thanh cong.'
  })
})
// su-co/:id/hoan-thanh
exports.hoanThanhSuCo = catchAsync(async(req, res, next) => {
  // chỉ hoàn thành những sự cố do mình tiếp nhận
  const su_co = await SuCo.findById(req.params.id)
  if(su_co.nhan_vien_tiep_nhan != req.user.id) {
    return next(new AppError("Chỉ hoàn thành những sự cố do mình tiếp nhận.", 403))
  }
  await SuCo.updateOne(su_co, {
    trangThai: "Completed",
    thoi_gian_hoan_thanh: new Date(Date.now() + 7 * 60 * 60 * 1000)
  })
  return res.status(200).json({
    status: 'success',
    code: 200,
    message: 'Bạn đã xử lí thành công sự cố này!'
  })
})