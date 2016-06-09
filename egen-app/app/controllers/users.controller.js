(function(){
  'use strict';
  
  angular
    .module('plunker')
    .controller('UsersCtrl', UsersController);
    
    UsersController.$inject = ['dataService'];
    function UsersController (dataService) {
        var usersVm = this;
      
        init();

        function init() {
            dataService.getUsers()
                .then(function (users) {
                    usersVm.people = users;
                });
        }

    }
  
})();