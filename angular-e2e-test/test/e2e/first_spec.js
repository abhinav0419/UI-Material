describe('E2E Test Example', function() {
    var baseURL = 'http://localhost:8080/Lab/angular-test/';

    beforeEach(function() {
        browser.get(baseURL + '#/first');
    });

    it('should have a heading View1', function() {
        var heading = element(by.binding('viewHeading'));
        expect(heading.getText()).toEqual('View1');
    });

    it('should have a 7 rows in the table', function() {
        element.all(by.repeater('p in people')).then(function(rows) {
            expect(rows.length).toEqual(7);
        });
    });

    it('should go to #/third route on click of button', function() {
        element(by.id('view3Li')).click();
        expect(browser.getCurrentUrl()).toEqual(baseURL + '#/third/AngularJS/Richmond');
    });
});
