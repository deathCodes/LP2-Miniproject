var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require('cors')

// connecting database
const mongoose = require ('mongoose');
const url = 'mongodb://127.0.0.1:27017/bookmart';
const connect = mongoose.connect(url);


connect.then(db => {
  console.log("bookmart connected !!!!!");
}, err=> console.log(err));


// import book router
var bookRouter = require('./routes/books');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use('/api', createProxyMiddleware({ 
  target: 'http://localhost:5000/', //original url
  changeOrigin: true, 
  //secure: false,
  onProxyRes: function (proxyRes, req, res) {
     proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  }
}));

app.use('/books', bookRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
