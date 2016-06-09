angular.module('myApp.providers', []).provider('resolve', [
    function() {
        return {
            loadModelSummary: function() {
                return {
                    something: ['CacheService',
                        function(CacheService) {
                            return CacheService.loadModelSummary();
                        }
                    ]
                };
            },
            $get: angular.noop
        };
    }
]);
