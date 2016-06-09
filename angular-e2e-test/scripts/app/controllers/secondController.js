myApp.controller('SecondCtrl', ['$scope', '$routeParams', 'RedirectService',
    function($scope, $routeParams, RedirectService) {

        $scope.viewHeading = 'View2';
        console.log($routeParams);

        $scope.goToView = function(route) {
            RedirectService.redirectMe(route, {
                param1: 'value1',
                param2: 200
            });
        };
    }
])
