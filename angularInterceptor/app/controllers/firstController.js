myApp.controller('FirstController', ['$scope', '$routeParams', 'RedirectService', '$route', '$rootScope', 'CacheService',
    function($scope, $routeParams, RedirectService, $route, $rootScope, CacheService) {
        var self = this;
        self.cache = CacheService;

        self.cache.modelSummary.pop();

        $scope.goToView = function(route) {
            RedirectService.redirectMe(route, {
                param1: 'value1',
                param2: 200
            });
        };

    }
]);
