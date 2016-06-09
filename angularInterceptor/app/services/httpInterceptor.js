myApp.factory('HttpInterceptor', ['$rootScope',
    function($rootScope) {

        return {
            'request': function(config) {
                console.log('request', config);
                $rootScope.processingRequest = true;
                return config;
            },

            'requestError': function(rejection) {
                console.log('requestError', rejection);
            },

            'response': function(response) {
                $rootScope.processingRequest = false;
                console.log('response', response);
                return response;
            },

            'responseError': function(rejection) {
                $rootScope.processingRequest = false;
                console.log('responseError', rejection);
                if (rejection.status == 404) {

                }

                return rejection;
            }
        };
    }
]);
