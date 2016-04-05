var downloadEmail = [    
    '<!DOCTYPE html><html lang=\"en\"><head><meta name=\"viewport\" content=\"width=device-width, initial scale=1.0\"/><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css\"><style>@media only screen and (max-width: 1000px){h1{font-size: 28px !important;}h3{font-size: 18px !important;}}</style></head><body><div style=\"text-align: center; font-family: \'Helvetica\', \'Arial\', sans-serif;\"><center><h1 style=\"font-size: 54px; font-weight: bold;\">300 UI in 300 Days</h1><h3 style=\"font-size: 24px;\">Day ', 
    // [day count] - [ui title]
    '</h3><img src=\"',
    // ui source
    '\" style=\"display: block; width: 540px; max-width: 100%; margin: 10px auto;\"><a href=\"',
    // download link
    '\" style=\"display: block; width: 200px; height: 50px; border: 0; border-radius: 50px; background: #229aff; color: #fff; font-family: \'Helvetica\', \'Arial\', sans-serif; font-weight: bold; margin: 15px auto 7px; box-shadow: 0 5px 30px #229aff; line-height: 50px; text-decoration: none;\">DOWNLOAD</a><h6 style=\"font-size: 10px; margin: 15px auto 0 auto;\">It\'s also <a href=\"https://github.com/jayhxmo/300UI-in-300Days\">open source</a></h6><ul style=\"list-style: none; margin: 50px auto 0; display: inline-block; padding: 0;\"> <li style=\"display: inline-block; margin: 0 13px;\"><a href=\"https://twitter.com/jayhxmo\" target=\"_blank\" style=\"color: #555;\"><img src=\"https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/master/black/png/24/twitter.png\" alt=\"\"></a></li><li style=\"display: inline-block; margin: 0 13px;\"><a href=\"https://dribbble.com/jayhxmo\" target=\"_blank\" style=\"color: #555;\"><img src=\"https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/master/black/png/24/dribbble.png\" alt=\"\"></a></li><li style=\"display: inline-block; margin: 0 13px;\"><a href=\"https://www.behance.net/jayhxmo\" target=\"_blank\" style=\"color: #555;\"><img src=\"https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/master/black/png/24/behance.png\" alt=\"\"></a></li><li style=\"display: inline-block; margin: 0 13px;\"><a href=\"https://www.github.com/jayhxmo\" target=\"_blank\" style=\"color: #555;\"><img src=\"https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/master/black/png/24/github.png\" alt=\"\"></a></li><li style=\"display: inline-block; margin: 0 13px;\"><a href=\"https://www.linkedin.com/in/jayhxmo\" target=\"_blank\" style=\"color: #555;\"><img src=\"https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/master/black/png/24/linkedin.png\" alt=\"\"></a></li></center></ul></div></body></html>'
];

var mongoose = require('mongoose');
var async = require('async');
var crypto = require('crypto');
var express = require('express');
var fs = require('fs');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var mandrillTransport = require('nodemailer-mandrill-transport');
var nunjucks = require('nunjucks');
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
    linkToken: { type: String, required: true, unique: true }
});
vipSchema.plugin(ttl, { ttl: '12hr' });

var recordsSchema = new mongoose.Schema({
    email: { type: String, required: true },
    day: { type: Number, required: true },
    linkToken: { type: String, required: true, unique: true }
});

var daySchema = new mongoose.Schema({
    title: { type: String, required: true },
    day: { type: Number, required: true },
    tags: { type: String, required: true },
    downloaded: { type: Number, required: true },
    size: { type: Number, required: true }
});

// Initialize MongoDB
var vip = mongoose.model('downloads', vipSchema);
var records = mongoose.model('users', recordsSchema);
var day = mongoose.model('days', daySchema);
mongoose.connect('mongodb://demo:pw@ds015849.mlab.com:15849/300ui-in-300days'); // update username / pw later, and delete demo account

/****************************************************
*****   D O     N O T     U N C O M M M E N T   *****
****************************************************/
// function fsMB(filename) {
//     var stats = fs.statSync(filename)
//     var fileSizeInBytes = stats["size"]
//     return fileSizeInBytes / 1000000;
// }

// for (var i = 1; i <= 100; i++) {
//     var index = 100 - i;
//     var dayEntry = new day({
//         title: all[index]["title"],
//         day: all[index]["day"],
//         tags: all[index]["tags"],
//         downloaded: 0,
//         size: Math.round(fsMB(__dirname + '/public/downloads/day' + all[index]["day"] + '.zip') * 10 ) / 10,
//     });
//     dayEntry.save();

//     // Output all the file sizes
//     console.log(fsMB(__dirname + '/public/downloads/day' + all[index]["day"] + '.zip'));
// }

// Middleware
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

nunjucks.configure(app.get('views'), {
    autoescape: true,
    noCache: true,
    watch: true,
    express: app
});

// Routes
app.get('/', function(req, res) {
    res.render('index.html');
});

// Pass Data for UI Rendering
app.get('/UIs', function(req, res) {
    day.find().sort([['day', -1]]).exec(function(error, UIs) {
        var all = [];

        var index = 0;
        UIs.forEach(function(ui) {
            var entry = {};
            entry["day"] = ui["day"];
            entry["title"] = ui["title"];
            entry["tags"] = ui["tags"];
            entry["downloaded"] = ui["downloaded"];
            entry["size"] = ui["size"];
            all[index++] = entry;
            console.log(entry);
        });

        res.send(all);  
    });
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

            var newUser = new records({
                email: req.body.email,
                day: req.body.day,
                linkToken: token
            });
            newUser.save();

            done(null, token, vip);
        },
        function(token, user, done) {
            var linkToken = token;
            day.findOne({ day: req.body.day }, function(err, token) {
                var uiTitle = token.title;

                console.log('emailing');
                transport.sendMail({
                    from: '300 UI in 300 Days <download@300ui.design>',
                    to: req.body.email,
                    subject: 'Download: Day ' + req.body.day + ' - ' + uiTitle,
                    html: downloadEmail[0] + req.body.day + ' - ' + uiTitle +
                          downloadEmail[1] + 'https://raw.githubusercontent.com/jayhxmo/300UI.Design/master/images/UIs/retina/Day%20' + req.body.day +'%20-%20UI.jpg' +
                          downloadEmail[2] + 'http://300ui.design/download/' + linkToken + 
                          downloadEmail[3]
                },
                function(err, info) {
                    if (err) {
                        res.sendStatus(500);
                    } 

                    else {
                        res.sendStatus(200);
                    }
                });
            });
        }
    ], function(err) {
        if (err) return next(err);
    });
});

app.get('/download/:token', function(req, res) {
    vip.findOne({ linkToken: req.params.token }, function(err, token) {
        if (!token) {
            records.findOne({ linkToken: req.params.token }, function(err, result) {
                if (!result) {
                    res.redirect('/404');
                }

                else {
                    res.render('expired.html', { "day": result.day });
                }
            });
        }

        else {
            day.findOne({ day: token.day }, function(err, result) {
                res.render('download.html', { "day": token.day, "email": token.email, "title": result.title });
                day.findOneAndUpdate({ day: token.day }, { $inc: { downloaded: 1 } }, function (err, doc) {});
            });
        }
    });
});

app.use(function(req, res, next){
    res.render('404.html');
});

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
