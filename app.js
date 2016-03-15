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
var mandrillTransport = require('nodemailer-mandrill-transport');

var app = express();

// Initialize Emailng System 
var transport = nodemailer.createTransport(mandrillTransport({
  auth: {
    apiKey: 'key'
  }
}));

// Setup MongoDB
var vipSchema = new mongoose.Schema({
    email: { type: String, required: true },
    day: { type: Number, required: true },
    linkToken: { type: String, required: true, unique: true },
    linkExpires: Date
});

// Initialize MongoDB
var vip = mongoose.model('VIP', vipSchema);
mongoose.connect(mongodb:demo:demo@ds027759.mongolab.com:27759/demo); // connect with my server later

// New DB Entry
vipSchema.pre('save', function(next) {
    var vip = this;
    vip.email = email;
    vip.day = day;
    vip.linkToken = token;
    vip.linkExpires = expiration;
    next();
});

// Requesting Download
app.post('/download', function(req, res, next) {
  async.waterfall([
    function(done) {
        crypto.randomBytes(10, function(err, buf) {
            var token = buf.toString('hex');
            done(err, token);
        });
    },
    function(token, done) {
        // Add New VIP Entry
        var newVIP = new vip({
            email: req.body.email,
            day: req.body.day,
            linkToken: token,
            linkExpires: Date.now() + 43200000; // 12 hours
        });
        vip.save();
    },
    function(token, user, done) {
      var smtpTransport = nodemailer.createTransport('SMTP', {
        service: 'Mandrill',
        auth: {
          user: '!!! YOUR SENDGRID USERNAME !!!',
          pass: '!!! YOUR SENDGRID PASSWORD !!!'
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'passwordreset@demo.com',
        subject: 'Node.js Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'http://' + req.headers.host + '/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        req.flash('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
        done(err, 'done');
      });
    }
  ], function(err) {
    if (err) return next(err);
    res.redirect('/forgot');
  });
});

app.get('/download/:token', function(req, res) {
    vip.findOne({ linkToken: req.params.token, linkExpires: { $gt: Date.now() } }, function(err, user) {

        if (!user) {
            console.log("Expired?")
            return res.redirect('/');
        }

        res.render('reset', {
           user: req.user
        });
    });
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