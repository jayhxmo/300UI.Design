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

// Initialize MongoDB
var vip = mongoose.model('VIP', vipSchema);
mongoose.connect('mongodb://demo:demo@ds015929.mlab.com:15929/jmo-projects'); // connect with my server later

// app.get('/download/:token', function(req, res) {
//     vip.findOne({ linkToken: req.params.token, linkExpires: { $gt: Date.now() } }, function(err, token) {
//         if (!token) {
//             console.log("Expired?")
//             return res.redirect('/');
//         }

//         res.render('download', {
//         });
//     });
// });


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
                linkToken: token,
                linkExpires: Date.now() + 43200000 // 12 hours
            });

            // implement writing document to mongo
            console.log(vip);
            done(null, token, vip);
        },
        function(token, user, done) {
            transport.sendMail({
                from: '300 UI in 300 Days <download@300ui.design>',
                to: 'jayhxmo@gmail.com',
                subject: 'Download: Day ' + req.body.day + " - Calculator",
                html: '<a href="300ui.design/download/' + token + '">Download</a>'
            },

            function(err, info) {
                if (err) {
                    console.error(err);
                } else {
                    console.log(info);
                }
            });
        }
    ], function(err) {
        if (err) return next(err);
        // res.redirect('/forgot');
    });
});

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
