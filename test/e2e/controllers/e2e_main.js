'use strict';

describe('Homepage', function () {

    beforeEach(function() {
        browser().navigateTo('/');
    });

    it('should be at the homepage', function() {
        expect(browser().window().path()).toBe('/');
        expect(browser().location().url()).toBe('/');
    });

    describe('Interface', function() {

        it('should have a button', function() {
            expect(element('#trybtn').count()).toEqual(1);
            expect(element('#trybtn').text()).toBe("hi");
        });

        it('should change color when the button is clicked', function() {
            var cssBgFuture
                    ,elementClickFuture
                    ,cssBgOld
                    ,cssBgNew;

            cssBgFuture = element('#heroUnit').css("backgroundColor");
            cssBgFuture.execute(function() {});
            cssBgOld = cssBgFuture.value;

            elementClickFuture = element('#trybtn').click();
            elementClickFuture.execute(function() {});

            cssBgFuture = element('#heroUnit').css("backgroundColor");
            cssBgFuture.execute(function() {});
            cssBgNew = cssBgFuture.value;

            expect(cssBgOld).not().toBe(cssBgNew);
        });
    });
});


describe('DB Tests', function () {

    beforeEach(function() {
        browser().navigateTo('/test.html');
    });

    it('should be at the test page', function() {
        expect(browser().window().path()).toBe('/test.html');
        expect(browser().location().url()).toBe('/test.html');
    });

    describe('Interface', function() {

        it('should not list items when first loaded', function() {
            expect(element('#listOnes li').count()).toEqual(0);
            expect(element('#listOnes_Key2 li').count()).toEqual(0);
        });

        it('should have a button', function() {
            expect(element('#fetchbtn').count()).toEqual(1);
            expect(element('#fetchbtn').text()).toBe("Fetch!");
        });

        it('should populate the lists after "fetch"', function() {
            var clickit = element('#fetchbtn').click();
            clickit.execute(function() {});

            var getCount = repeater('ul#listOnes li').count();
            getCount.execute(function(value) {
                expect(value).toEqual(3);
            });
            var getCount2 = repeater('ul#listOnes_Key2 li').count();
            getCount2.execute(function(value) {
                expect(value).toEqual(1);
            });
        });
    });
});
