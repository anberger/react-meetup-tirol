var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var app = express();
var request = require('xhr-request');
var endpoint = "https://lawine.tirol.gv.at/rest/bulletin/latest/xml/de";

var compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/www'));

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    stats: {
        colors: true,
    },
    historyApiFallback: true,
}));

var router = express.Router();

var apiCall = function (req, res, next) {
    request(endpoint, {
        xml: true
    }, function (error, respond) {
        if (error) {
            req.error = error;
            next();
        }
        else {
            req.data = respond;
            next();
        }
    })
};

router.get('/', apiCall, function (req, res) {

    // Avoid CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    // Send respond to client
    if (req.error) {
        res.status(500);
        res.send(req.error.toString())
    } else {
        res.send(req.data);
    }
});

// Append router to express
app.use('/report', router);

var appServer = app.listen(3000, function () {
    var host = appServer.address().address;
    var port = appServer.address().port;
    console.log('Webapplication is listening at http://%s:%s', host, port);
});
