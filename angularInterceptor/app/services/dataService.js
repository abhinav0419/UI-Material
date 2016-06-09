myApp.factory('DataService', ['$http', '$q', '$timeout',
    function($http, $q, $timeout) {
        var hello = "Hello";
        var self = {
            myData: null,
            getData: function() {
                var deferred = $q.defer();

                if (!(self.myData)) {
                    $http({
                        method: 'GET',
                        url: 'server/someData.json'
                    }).success(function(data) {
                        self.myData = data;
                        deferred.resolve(self.myData);
                        console.log(self.myData.length);

                    }).error(function(error) {
                        console.log(error);
                        deferred.reject(error);
                    });
                } else {
                    deferred.resolve(self.myData);
                    console.log(self.myData.length);
                }
                return deferred.promise;
            }
        };

        return self;
    }
]);
