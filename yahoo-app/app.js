//load express
var express = require('express');
var http = require("http");
var app = express();

//create static binding for this express app.
//all the files in public directory should be directly available from the browser
app.use(express.static('public'));

//start the server at localhost:3000 address
var server = app.listen(3000, function () {

    var host = server.address().address,
        port = server.address().port

    console.log('yahoo-app listening at http://%s:%s', host, port);

});

//using YQL's JSONP like request here as well to avoid creating a YQL App for its appId.
var yqlUrl = 'http://query.yahooapis.com/v1/public/yql?q=',
    yqlFormat = '&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK';


app.get('/getWOEID/:zip', function (request, response) {

    var woeid_query = 'select woeid from geo.places(1) where text="' + request.params.zip + '"';
    var woeid_url = yqlUrl + fixedEncodeURIComponent(woeid_query) + yqlFormat;

    console.log(woeid_url);

    http.get(woeid_url, function (yahooResponse) {
        var data = "";

        yahooResponse.on("data", function (chunk) {
            // append this chunk to our growing `data` var
            data += chunk;
        });

        yahooResponse.on("end", function () {

            //string manipulation to get rid of the JSONP response from YQL query
            var rez = data.replace('/**/JSON_CALLBACK(', '').replace(');', '');
            console.log(rez);
            response.send(rez);
        });
    }).on('error', function (e) {
        console.log("Got error: " + e.message);
    });
});

app.get('/getWeatherData/:woeid', function (request, response) {

    var weather_query = 'select * from weather.forecast where woeid =' + request.params.woeid;
    var weather_url = yqlUrl + fixedEncodeURIComponent(weather_query) + yqlFormat;
    console.log(weather_url);

    http.get(weather_url, function (yahooResponse) {
        var data = "";

        yahooResponse.on("data", function (chunk) {
            // append this chunk to our growing `data` var
            data += chunk;
        });

        yahooResponse.on("end", function () {
            //string manipulation to get rid of the JSONP response from YQL query
            var rez = data.replace('/**/JSON_CALLBACK(', '').replace(');', '');
            console.log(rez);
            response.send(rez);
        });
    }).on('error', function (e) {
        console.log("Got error: " + e.message);
    });
});

function fixedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()]/g, escape).replace(/\"/g, "%22");
}