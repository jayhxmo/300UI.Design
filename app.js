var session = require('express-session')
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var async = require('async');
var crypto = require('crypto');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

var vipSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    day: { type: Number, required: true },
    linkToken: String,
    linkExpires: Date
});

// Middleware
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
// app.use(session({ secret: 'session secret key' }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});