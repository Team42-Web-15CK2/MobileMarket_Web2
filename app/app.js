let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let auth = require('./routes/auth/auth');
let user = require('./routes/user/user');

const passport    = require('passport');

require('./passport');

let indexRouter = require('./routes/index');
let apiRouter = require('./routes/api');


let app = express();

app.use('/user', passport.authenticate('jwt', {session: false}), user);
app.use('/auth', auth);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


let cors = require('cors');

// use it before all route definitions
app.use(cors({origin: 'null'}));


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
