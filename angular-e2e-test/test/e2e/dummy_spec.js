describe('My First Test Case', function() {

    beforeEach(function() {
        browser.get('http://www.angularjs.org');
    });

    it('should greet the named user', function() {

        element(by.model('yourName')).sendKeys('AngularJS');

        var greeting = element(by.binding('yourName'));

        expect(greeting.getText()).toEqual('Hello AngularJS!');
    });
});
