myApp.controller('ThirdController',  ['$scope', '$routeParams', 'RedirectService', function($scope, $routeParams, RedirectService) {
        
        console.log($routeParams);

        $scope.goToView = function (route){
            RedirectService.redirectMe(route);
        };

        
    }
])
