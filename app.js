var downloadEmail = [    
    '<!DOCTYPE html><html lang=\"en\"><head><meta name=\"viewport\" content=\"width=device-width, initial scale=1.0\"/><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css\"><style>@media only screen and (max-width: 1000px){h1{font-size: 28px !important;}h3{font-size: 18px !important;}}</style></head><body><div style=\"text-align: center; font-family: \'Helvetica\', \'Arial\', sans-serif;\"><center><h1 style=\"font-size: 54px; font-weight: bold;\">300 UI in 300 Days</h1><h3 style=\"font-size: 24px;\">Day ', 
    // [day count] - [ui title]
    '</h3><img src=\"',
    // ui source
    '\" style=\"display: block; width: 540px; max-width: 100%; margin: 10px auto;\"><a href=\"',
    // download link
    '\" style=\"display: block; width: 200px; height: 50px; border: 0; border-radius: 50px; background: #229aff; color: #fff; font-family: \'Helvetica\', \'Arial\', sans-serif; font-weight: bold; margin: 15px auto 7px; box-shadow: 0 5px 30px #229aff; line-height: 50px; text-decoration: none;\">DOWNLOAD</a><h6 style=\"font-size: 10px; margin: 15px auto 0 auto;\">It\'s also <a href=\"https://github.com/jayhxmo/300UI-in-300Days\">open source</a></h6><ul style=\"list-style: none; margin: 50px auto 0; display: inline-block; padding: 0;\"> <li style=\"display: inline-block; margin: 0 13px;\"><a href=\"https://twitter.com/jayhxmo\" target=\"_blank\" style=\"color: #555;\"><img src=\"https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/master/black/png/24/twitter.png\" alt=\"\"></a></li><li style=\"display: inline-block; margin: 0 13px;\"><a href=\"https://dribbble.com/jayhxmo\" target=\"_blank\" style=\"color: #555;\"><img src=\"https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/master/black/png/24/dribbble.png\" alt=\"\"></a></li><li style=\"display: inline-block; margin: 0 13px;\"><a href=\"https://www.behance.net/jayhxmo\" target=\"_blank\" style=\"color: #555;\"><img src=\"https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/master/black/png/24/behance.png\" alt=\"\"></a></li><li style=\"display: inline-block; margin: 0 13px;\"><a href=\"https://www.github.com/jayhxmo\" target=\"_blank\" style=\"color: #555;\"><img src=\"https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/master/black/png/24/github.png\" alt=\"\"></a></li><li style=\"display: inline-block; margin: 0 13px;\"><a href=\"https://www.linkedin.com/in/jayhxmo\" target=\"_blank\" style=\"color: #555;\"><img src=\"https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/master/black/png/24/linkedin.png\" alt=\"\"></a></li></center></ul></div></body></html>'
];

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

            done(null, token, vip);
        },
        function(token, user, done) {
            day.findOne({ day: req.body.day }, function(err, token) {
                var uiTitle = token.title;
                console.log(token);

                transport.sendMail({
                from: '300 UI in 300 Days <download@300ui.design>',
                to: req.body.email,
                subject: 'Download: Day ' + req.body.day + ' - ' + uiTitle,
                html: downloadEmail[0] + req.body.day + ' - ' + uiTitle +
                      downloadEmail[1] + 'raw.githubusercontent.com/jayhxmo/300UI.Design/master/images/UIs/Day%20' + req.body.day +'%20-%20UI.jpg' +
                      downloadEmail[2] + 'http://300ui.design/download/' + token + 
                      downloadEmail[3]
                },
                function(err, info) {
                    if (err) {
                        // console.error(err);
                    } 

                    else {
                        // console.log(info);
                    }
                });
            });

            // Update and notify the user that the email has been sent
        }
    ], function(err) {
        if (err) return next(err);
        // res.redirect('/forgot');
    });
});

app.get('/download/:token', function(req, res) {
    vip.findOne({ linkToken: req.params.token }, function(err, token) {
        console.log(req.params.token);
        console.log(token);
        if (!token) {
            console.log("Not found - now query all results");
            // see if token expired, and if it did, then redirect to expired page
            // if not (expired & found), then redirect to 404
            // res.render('/404');
        }

        else {
            // console.log("Found: " + token);
            // res.send(token);
            res.render('download.html', { day: token.day });
            $('.subscription').css('background', 'url(/images/UIs/Day ' + token + ' - UI.jpg)');
            day.findOneAndUpdate({ day: token.day }, { $inc: { downloaded: 1 } }, function (err, doc) {});
        }
    });
});

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
