describe("E2E: Testing Requests", function() {

    browser.get('http://localhost:8180/angular');

    beforeEach(function() {
        browser().navigateTo('/');
    });

    it('should go to #/first', function() {
        //browser().navigateTo('#/first');
        // browser.waitForAngular();
        //expect(browser().location().path()).toBe("/first");
        //expect(element(by.id('viewId')).getText()).toBe("View 1");
    });


});
