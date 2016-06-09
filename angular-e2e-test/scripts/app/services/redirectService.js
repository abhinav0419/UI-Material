myApp.factory('RedirectService', ['$location',
    function ($location)
    {

        var redirectObj = {
            redirectMe: function (route, params)
            {
                var realParam = params || '';
                $location.path(route).search(realParam);
            }
        };

        return redirectObj;
    }
]);
