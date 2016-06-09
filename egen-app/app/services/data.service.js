(function () {
    'use strict';

    angular
        .module('plunker')
        .service('dataService', dataServiceFn);

    dataServiceFn.$inject = ['$http', '$q'];
    function dataServiceFn($http, $q) {
        var self = this;

        self.getPosts = getPosts;
        self.getUsers = getUsers;
        self.getUserDetail = getUserDetail;

        function getPosts() {
            var defer = $q.defer();

            $http({
                method: 'GET',
                url: 'http://jsonplaceholder.typicode.com/posts'
            })
                .success(function (data) {
                    defer.resolve(data);
                })
                .error(function (err) {
                    defer.reject(err)
                });
            return defer.promise;
        }

        function getUsers() {
            var defer = $q.defer();
            $http({
                method: 'GET',
                url: 'http://jsonplaceholder.typicode.com/users'
            })
                .success(function (data) {
                    defer.resolve(data);
                })
                .error(function (err) {
                    defer.reject(err)
                });
            return defer.promise;
        }

        function getUserDetail(userid) {
            var defer = $q.defer();
            $http({
                method: 'GET',
                url: 'http://jsonplaceholder.typicode.com/users/' + userid
            })
                .success(function (data) {
                    defer.resolve(data);
                })
                .error(function (err) {
                    defer.reject(err)
                });
            return defer.promise;
        }
    }

})();