(function(){

    describe('dataService: ', function(){

        var httpBackend,
            dataService;

        beforeEach(module('plunker'));

        beforeEach(inject(function($injector, $httpBackend){
            dataService = $injector.get('dataService');
            httpBackend = $httpBackend;
        }));

        describe(' get all users', function(){
            it('Success', function(){

                httpBackend.expectGET('http://jsonplaceholder.typicode.com/users').respond(200, [{},{},{}]);

                dataService.getUsers().then(function(results){
                    expect(results.length).toEqual(3);
                });
                httpBackend.flush();
            });

            it('Error', function(){

                httpBackend.expectGET('http://jsonplaceholder.typicode.com/users').respond(500, {});
                dataService.getUsers().catch(function(results){
                    expect(results).toEqual({});
                });
                httpBackend.flush();
            });
        });
    });

})();