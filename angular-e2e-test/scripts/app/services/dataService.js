myApp.factory('DataService', ['$http', '$q',
    function($http, $q) {

        var myData;
        var dataObj = {
            getData: function() {
                var deferred = $q.defer();
                if (!myData) {
                    $http({
                        method: 'GET',
                        url: 'server/someData.json'
                    }).success(function(data) {
                        myData = data;
                        deferred.resolve(myData);
                        console.log(myData);
                    }).error(function(error) {
                        console.log(error);
                        deferred.reject(error);
                    });
                } else {
                    deferred.resolve(myData);
                    console.log(myData);
                }
                return deferred.promise;
            }
        };

        return dataObj;
    }
]);
