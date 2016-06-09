"use strict";

(function() {


    document.getElementById('ajaxBtn').addEventListener('click', doAjax, false);

    function doAjax() {
        var url = 'https://www.google.com/?gws_rd=ssl',
            httpRequest;

        httpRequest = new XMLHttpRequest();

        httpRequest.open('GET', url, true);
        httpRequest.send();


        httpRequest.onreadystatechange = function(e) {


            if(httpRequest.readyState == 4)
            {
                if(httpRequest.status == 200)
                {
                    var obj = JSON.parse(httpRequest.responseText);
                    console.dir(obj.glossary.title);

                    document.getElementById('target').innerHTML = obj.glossary.title;
                }
            }
        };

    }

})();
