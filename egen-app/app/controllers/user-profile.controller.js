(function () {
    'use strict';

    angular
        .module('plunker')
        .controller('UserProfileCtrl', UserProfileController);

    UserProfileController.$inject = ['dataService', '$routeParams'];
    function UserProfileController(dataService, $routeParams) {
        var uprofileVm = this;

        console.log($routeParams);

        dataService.getUserDetail($routeParams.userid)
            .then(function (userDetail) {
                uprofileVm.person = userDetail;
            },
            function(err){
                console.log(err);
            });
    }

})();