var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
const MONGODB_URI =
"mongodb://localhost:27017"
mongoose
 .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
 .then(console.log("Connected to MongoDB"))
 .catch(err => {
 console.log(err);
 });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
