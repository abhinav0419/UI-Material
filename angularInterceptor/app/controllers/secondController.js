myApp.controller('SecondController', ['$scope', '$routeParams', 'RedirectService', 'CacheService',
    function($scope, $routeParams, RedirectService, CacheService) {
        var self = this;
        self.cache = CacheService;

        self.cache.modelSummary.pop();

        $scope.goToView = function(route) {
            RedirectService.redirectMe(route);
        };

    }
])
