myApp.factory('CacheService', ['$http', '$q', '$timeout',
    function($http, $q, $timeout) {

        function makeAjax(url) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: url,
            }).success(function(data) {
                deferred.resolve(data);
            }).error(function(error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }

        var cache = {
            //modelSummary
            modelSummary: null,
            //pricingSum
            pricingSummary: null,
            loadModelSummary: function() {
                var deferred = $q.defer();
                if (cache.modelSummary) {
                    deferred.resolve(cache.modelSummary);
                } else {
                    makeAjax('server/someData.json')
                        .then(function(data) {
                            cache.modelSummary = data;
                            deferred.resolve();
                        }, function(error) {
                            console.log(error);
                            deferred.reject(error);
                        });
                }
                return deferred.promise;
            },
            loadPricingSummary: function() {

            }
        };

        return cache;
    }
]);
