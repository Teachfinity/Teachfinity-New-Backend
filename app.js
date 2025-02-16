var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
var classroomRouter = require('./app_server/routes/classes');
var postRouter = require('./app_server/routes/posts');
var meetingRouter = require('./app_server/routes/meetings');
var assignmentRouter = require('./app_server/routes/assignments');
var quizRouter = require('./app_server/routes/quizzes');
var cors = require("cors") ;
const connectDB = require("./db");

/* const connection = mongoose.connect('mongodb://localhost:27017/lms', { useNewUrlParser: true, useUnifiedTopology: true });
 */
var app = express();

/* connection.then((db) => {
  console.log("Connected correctly to server");
}, (err) => { console.log(err); }); */

// Connect to DB
connectDB();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'jade');

app.use(cors()) ;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/classes', classroomRouter);
app.use('/posts', postRouter);
app.use('/meetings', meetingRouter);
app.use('/assignments', assignmentRouter);
app.use('/quizzes', quizRouter);

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
