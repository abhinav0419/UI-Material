myApp.controller('FirstCtrl', ['$scope', '$routeParams', 'RedirectService', 'initData', '$route',
    function($scope, $routeParams, RedirectService, initData, $route) {

        $scope.viewHeading = 'View1';
        console.log($route);
        $scope.people = initData;
        console.log($scope.people);

        $scope.goToView = function(route) {
            RedirectService.redirectMe(route);
        };
    }
]);
