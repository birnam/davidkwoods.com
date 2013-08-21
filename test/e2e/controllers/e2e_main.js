'use strict';

xdescribe('Homepage', function () {

    beforeEach(function() {
        browser().navigateTo('/');
    });

    describe('Interface', function() {

        it('should be at the homepage', function() {
            expect(browser().window().path()).toBe('/');
            expect(browser().location().url()).toBe('/');
        });

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


describe('Navigation', function () {

    describe('Home', function() {
        beforeEach(function() {
            browser().navigateTo('/');
        });

        it('should be at "/"', function() {
            expect(browser().window().path()).toBe('/');
        });

        it('should show home title', function() {
            expect(element('title').text()).toContain("Home");
        });

        it('should show home content', function() {
            expect(element('.contentArea h1:first').count()).toEqual(1);
            expect(element('.contentArea h1:first').text()).toContain("Welcome");
        });
    });

    describe('About', function() {
        beforeEach(function() {
            browser().navigateTo('/about');
        });

        it('should be at "/about"', function() {
            expect(browser().window().path()).toBe('/about');
        });

        it('should show about title', function() {
            expect(element('title').text()).toContain("About");
        });

        it('should show about content', function() {
            expect(element('.contentArea h1:first').count()).toEqual(1);
            expect(element('.contentArea h1:first').text()).toContain("Who");
        });
    });

    describe('Skills', function() {
        beforeEach(function() {
            browser().navigateTo('/skills');
        });

        it('should be at "/skills"', function() {
            expect(browser().window().path()).toBe('/skills');
        });

        it('should show skills title', function() {
            expect(element('title').text()).toContain("Skills");
        });

        it('should show skills content', function() {
            expect(element('.contentArea h1:first').count()).toEqual(1);
            expect(element('.contentArea h1:first').text()).toContain("Skills");
        });
    });

    describe('Experience', function() {
        beforeEach(function() {
            browser().navigateTo('/experience');
        });

        it('should be at "/experience"', function() {
            expect(browser().window().path()).toBe('/experience');
        });

        it('should show experience title', function() {
            expect(element('title').text()).toContain("Experience");
        });

        it('should show experience content', function() {
            expect(element('.contentArea h1:first').count()).toEqual(1);
            expect(element('.contentArea h1:first').text()).toContain("Experience");
        });
    });

    describe('Portfolio', function() {
        beforeEach(function() {
            browser().navigateTo('/portfolio');
        });

        it('should be at "/portfolio"', function() {
            expect(browser().window().path()).toBe('/portfolio');
        });

        it('should show portfolio title', function() {
            expect(element('title').text()).toContain("Portfolio");
        });

        it('should show portfolio content', function() {
            expect(element('.contentArea h1:first').count()).toEqual(1);
            expect(element('.contentArea h1:first').text()).toContain("Portfolio");
        });
    });

    describe('Contact', function() {
        beforeEach(function() {
            browser().navigateTo('/contact');
        });

        it('should be at "/contact"', function() {
            expect(browser().window().path()).toBe('/contact');
        });

        it('should show contact title', function() {
            expect(element('title').text()).toContain("Contact");
        });

        it('should show contact content', function() {
            expect(element('.contentArea h1:first').count()).toEqual(1);
            expect(element('.contentArea h1:first').text()).toContain("Contact");
        });
    });

});
