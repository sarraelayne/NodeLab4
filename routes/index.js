var express = require('express');
var router = express.Router();;
var request = require('request')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/city', function(req, res, next) {
    var cUrl = "http://bioresearch.byu.edu/cs260/jquery/getcity.cgi?q=";
    console.log("cityquery ",req.query);
    cUrl += req.query['q'];
    request(cUrl).pipe(res);
   
});

router.get('/owl', function (req, res, next) {
    var url = "https://owlbot.info/api/v1/dictionary/";
    console.log("query ",req.query);
    url += req.query['q'];
    url += "?format=json";
    request(url).pipe(res);
});

router.get('/weather', function(req, res, next) {
    var wUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
    console.log("weatherquery ",req.query);
    wUrl += req.query['q'];
    wUrl += "&APPID=dc0cd594376255d132e802ee0df9a790";
    request(wUrl).pipe(res);
});
module.exports = router;
