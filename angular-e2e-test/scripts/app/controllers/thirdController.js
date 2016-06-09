myApp.controller('ThirdCtrl', ['$scope', '$routeParams', 'RedirectService',
    function($scope, $routeParams, RedirectService) {

        $scope.viewHeading = 'View3';
        console.log($routeParams);

        $scope.goToView = function(route) {
            RedirectService.redirectMe(route);
        };


    }
])
