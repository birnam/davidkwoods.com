'use strict';

describe('Homepage', function () {

    beforeEach(function() {
        browser().navigateTo('/');
    });

//    pause();
//
//    sleep(3);

    it('should be at the homepage', function() {
        console.log("window.path", browser().window().path());
        console.log("location.url", browser().location().url());

        expect(browser().window().path()).toBe('/');
        expect(browser().location().url()).toBe('/');
    });

    it('should have a page title', function() {
        expect(angular.element('title').text()).toBeDefined();
    });
});
