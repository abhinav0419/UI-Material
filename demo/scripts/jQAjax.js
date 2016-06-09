"use strict";

$(function () {

    $('#ajaxBtn').click(function () {

        var obj = {
            name: 'JavaScript',
            age: 20,
            city: 'Chicago'
        };

        //$.ajax({
        //    cache: false,
        //    method: 'GET',
        //    url: 'dummy-server/dummyJSON.json',
        //    beforeSend: function() {
        //        console.log('Sending Request');
        //    },
        //    data: obj,
        //    error: function(jqXHR, textStatus, error){
        //        console.log(error);
        //    },
        //    success: function (data, textStatus, jqXHR) {
        //       console.log(data);
        //       $('#target').text(data.glossary.title);
        //    }
        //});

        $.ajax({
            url: "http://query.yahooapis.com/v1/public/yql",

            // the name of the callback parameter, as specified by the YQL service
            jsonp: "callback",

            // tell jQuery we're expecting JSONP
            dataType: "jsonp",

            // tell YQL what we want and that we want JSON
            data: {
                q: "select * from local.search where zip='60563' and query='pizza'",
                format: "json"
            },

            // work with the response
            success: function (response) {
                console.log(response); // server response
            }
        });
    });
});
