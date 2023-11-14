var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var suCoRouter = require('./router/SuCoRouter');
const phongHocRouter = require('./router/PhongHocRouter');
const coSoRouter = require('./router/CoSoRouter');
const tangRouter = require('./router/TangRouter');
const toaNhaRouter = require('./router/ToaNhaRouter');
const suKienRouter = require('./router/SuKienRouter');
const taiSanRouter = require('./router/TaiSanRouter');
const userRouter = require('./router/UserRouter')
const thongBaoRouter = require('./router/ThongBaoRouter')

const globalErrorHandler = require('./controller/errorController');
const AppError = require('./utils/appError');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/su-co', suCoRouter);
app.use('/api/co-so', coSoRouter);
app.use('/api/phong-hoc', phongHocRouter);
app.use('/api/tang', tangRouter);
app.use('/api/toa-nha', toaNhaRouter);
app.use('/api/su-kien', suKienRouter);
app.use('/api/tai-san', taiSanRouter);
app.use('/api/users', userRouter);
app.use('/api/thong-bao', thongBaoRouter);

// catch 404 and forward to error handler
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});


// error handler
app.use(globalErrorHandler);

module.exports = app;
