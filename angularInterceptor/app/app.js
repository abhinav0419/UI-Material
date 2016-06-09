"use strict";
var myApp = angular.module('myApp', ['ngRoute', 'myApp.providers']);

myApp.run(['$http', '$templateCache', '$rootScope',
    function($http, $templateCache, $rootScope) {
        $rootScope.processingRequest = false;
        $http.get('partials/view1.html', {
            cache: $templateCache
        });
        $http.get('partials/view2.html', {
            cache: $templateCache
        });
        $http.get('partials/view3.html', {
            cache: $templateCache
        });

    }
]);


myApp.config(['$routeProvider', '$httpProvider', '$locationProvider', 'resolveProvider',
    function(a, b, c, resolveProvider) {

        a.when('/first', {
            templateUrl: 'partials/view1.html',
            controller: 'FirstController',
            controllerAs: 'models',
            resolve: resolveProvider.loadModelSummary()
        }).when('/second', {
            templateUrl: 'partials/view2.html',
            controller: 'SecondController'
        }).when('/third', {
            templateUrl: 'partials/view3.html',
            controller: 'ThirdController'
        }).otherwise({
            redirectTo: '/first'
        });

        //$locationProvider.html5Mode(true);
        //$httpProvider.interceptors.push('HttpInterceptor');
    }
]);
