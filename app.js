var express = require('express');
var session = require('express-session');
var logger = require('morgan');
var fs=require('fs');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var MongoStore = require('connect-mongo')(session);
var settings = require('./settings');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'webfront/views'));
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'webfront')));
app.use(session({secret: settings.cookieSecret, store: new MongoStore({db: settings.db}),proxy: true,
    resave: true,
    saveUninitialized: true}));
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});
var errorLogStream = fs.createWriteStream(__dirname + '/error.log', {flags: 'a'});
// setup the logger
app.use(logger('combined', {stream: accessLogStream}));
app.use('/', index);

/*app.use('/comment', comment);*/
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        var meta = '['+new Date()+']' + req.url + '\n';
        errorLogStream.write(meta+err.stack+'\n');
      res.send(err);
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    var meta = '['+new Date()+']' + req.url + '\n';
    errorLogStream.write(meta+err.stack+'\n');
    res.send(err);
});


module.exports = app;
