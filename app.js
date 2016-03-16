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
var ttl = require('mongoose-ttl');

var app = express();

// Initialize Emailng System 
var transport = nodemailer.createTransport(mandrillTransport({
    auth: {
        apiKey: 'iG5PHiQedDh7TXuHnMVX_g'
    }
}));

// Setup MongoDB
var vipSchema = new mongoose.Schema({
    email: { type: String, required: true },
    day: { type: Number, required: true },
    linkToken: { type: String, required: true, unique: true },
    linkExpires: Date
});
vipSchema.plugin(ttl, { ttl: '12hr' });

var daySchema = new mongoose.Schema({
    title: { type: String, required: true },
    day: { type: Number, required: true },
    tags: { type: String, required: true },
    downloaded: { type: Number, required: true }
});

// Initialize MongoDB
var vip = mongoose.model('downloads', vipSchema);
var records = mongoose.model('users', vipSchema);
var day = mongoose.model('days', daySchema);
mongoose.connect('mongodb://demo:pw@ds015849.mlab.com:15849/300ui-in-300days'); // update username / pw later, and delete demo account

// Middleware
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', function(req, res) {
    res.render('index.html');
});

// Requesting Download
app.post('/download', function(req, res, next) {
    async.waterfall([
        function(done) {
            crypto.randomBytes(7, function(err, buf) {
                var token = buf.toString('hex');
                done(err, token);
            });
        },
        function(token, done) {
            // Add New VIP Entry
            var newVIP = new vip({
                email: req.body.email,
                day: req.body.day,
                linkToken: token
            });
            newVIP.save();
            // newVIP.save(function(err) {});

            var newUser = new records({
                email: req.body.email,
                day: req.body.day,
                linkToken: token
            });
            newUser.save();

            day.findOneAndUpdate({ day: 100 }, { $inc: { downloaded: 1 } }, function (err, doc) {});

            done(null, token, vip);
        },
        function(token, user, done) {
            // transport.sendMail({
            //     from: '300 UI in 300 Days <download@300ui.design>',
            //     to: req.body.email,
            //     subject: 'Download: Day ' + req.body.day + " - Calculator",
            //     html: '<a href="300ui.design/download/' + token + '">Download</a>'
            // },

            // function(err, info) {
            //     if (err) {
            //         // console.error(err);
            //     } 

            //     else {
            //         // console.log(info);
            //     }
            // });

            // Update and notify the user that the email has been sent
        }
    ], function(err) {
        if (err) return next(err);
        // res.redirect('/forgot');
    });
});

app.get('/download/:token', function(req, res) {
    vip.findOne({ linkToken: req.params.token }, function(err, token) {
        if (!token) {
            console.log("Not found - now query all results");
            // see if token expired, and if it did, then redirect to expired page
            // if not (expired & found), then redirect to 404
            // res.redirect('/404');
        }

        console.log("Found: " + token);
        res.send(token);
        // res.render('download', {
        // });
    });
});

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
