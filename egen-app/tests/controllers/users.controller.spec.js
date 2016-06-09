(function () {

    describe('UsersCtrl', function () {

        var service, usersVm,
        usersMock = [
            {
                id: 1,
                name: 'Dummy Name 1 ',
                username: 'dummy1'
            },
            {
                id: 2,
                name: 'Dummy Name 2 ',
                username: 'dummy2'
            }
        ];

        beforeEach(module('plunker'));

        beforeEach(inject(function ($controller, dataService, $q, $rootScope) {

            service = dataService;

            var defer = $q.defer();

            defer.resolve(usersMock);

            spyOn(service, 'getUsers').and.returnValue(defer.promise);

            usersVm = $controller('UsersCtrl', {'dataService': service});

            $rootScope.$apply();
        }));


        it('should be defined', function(){
            expect(usersVm).toBeDefined();
        });

        it('should get people', function() {

            expect(usersVm.people.length).toEqual(2);
        });

    });


})();