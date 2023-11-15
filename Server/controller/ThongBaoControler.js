
const ThongBao = require('../model/ThongBaoModel')

exports.getAll = async (req, res, next) => {
    try {
        const data = await ThongBao.find();
        res.status(500).json({
            status: 'success',
            data
        })
    } catch (error) {
        res.status(500).json({
            status: 'failed'
        })
    }
}
exports.addThongBao = async (req, res, next) => {
    try {
        var nguoiDang = req.body.nguoiDang
        var title = req.body.title
        var noiDung = req.body.noiDung
        // Lấy ngày giờ hiện tại
        var currentDate = new Date();

        // Định dạng ngày giờ theo múi giờ của Việt Nam (UTC+7)
        var options = { timeZone: 'Asia/Ho_Chi_Minh' };
        var formatter = new Intl.DateTimeFormat('en-US', options);

        // Hiển thị ngày giờ hiện tại của Việt Nam
        console.log("Ngày giờ hiện tại của Việt Nam: " + formatter);

        // Lấy thông tin về múi giờ
        var timeZoneOffset = 7; // Ví dụ: UTC+7 (múi giờ Việt Nam)
        var utc = currentDate.getTime() + currentDate.getTimezoneOffset() * 60000; // Chuyển về UTC
        var localTime = new Date(utc + 3600000 * timeZoneOffset); // Cộng thêm múi giờ

        // Hiển thị thời gian hiện tại của Việt Nam
        console.log("Thời gian hiện tại của Việt Nam: " + localTime);

        var dateTime = formatter + localTime
        const data = await ThongBao.create({
            title: title,
            nguoiDang: nguoiDang,
            noiDung: noiDung,
            thoiGian: dateTime
        })
        res.status(201).json({
            status: 'success',
            data
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',

        })
    }
}
exports.deleteThongbao = async (req, res, next) => {
    try {
        const data = await ThongBao.deleteOne({ _id: req.params.id });
        res.status(500).json({
            status: 'success',
            data
        })
    } catch (error) {
        res.status(500).json({
            status: 'failed'
        })
    }
}
exports.getCT = async (req, res, next) => {
    try {
        const data = await ThongBao.findOne({ _id: req.params.id });
        res.status(500).json({
            status: 'success',
            data
        })
    } catch (error) {
        res.status(500).json({
            status: 'failed'
        })
    }
}