myApp.factory('RedirectService', ['$location',
    function($location) {

        //console.log(hello);


        var redirectObj = {
            redirectMe: function(route, params) {
                var realParam = params || '';
                $location.path(route).search(realParam);

            }
        };

        return redirectObj;
    }
]);
