angular.module('plunker', ['ngSanitize']);

angular.module('plunker').controller('MainCtrl', function ($http) {
    var main = this;
    main.zipcode = null;
    main.woeid = null;
    main.weather = null;

    main.loadWeather = function () {

        if (!main.zipcode) {
            alert('You didn’t type a valid zip code!');
            return;
        }
        if (!validateZipCode(main.zipcode)) {
            alert('Enter a valid zip code');
            return;
        } else {
            $http.get('/getWOEID/' + main.zipcode).
                success(function (data) {
                    //if this is valid US zip, Yahoo should return a non-zero count
                    console.log(data);
                    if (data.query.count > 0) {
                        main.woeid = data.query.results.place.woeid;
                        return main.woeid;
                    } else {
                        alert('Enter a valid zip code');
                        return;
                    }
                }).
                then(function (woeid) {

                    $http.get('/getWeatherData/' + main.woeid).
                        success(function (data) {
                            console.log(data.query);
                            main.weather = data.query.results.channel;
                        }).
                        error(function () {
                        });
                });
        }

    };

    function validateZipCode(number) {
        return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(number);
    }


});