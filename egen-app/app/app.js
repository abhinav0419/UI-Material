(function(){
    'use strict';

    angular
        .module('plunker', ['ngRoute'])
        .config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider'];
    function moduleConfig($routeProvider) {
        $routeProvider
            .when('/users', {
                templateUrl: 'app/views/users.tmpl.html',
                controller: 'UsersCtrl',
                controllerAs: 'usersVm'
            })
            .when('/users/:userid', {
                templateUrl: 'app/views/user-profile.tmpl.html',
                controller: 'UserProfileCtrl',
                controllerAs: 'uprofileVm'
            })
            .when('/posts', {
                templateUrl: 'app/views/posts.tmpl.html',
                controller: 'PostsCtrl',
                controllerAs: 'postsVm'
            })
            .otherwise({
                redirectTo: '/users'
            });
    }
})();
