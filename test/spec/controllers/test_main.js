'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('davidkwoodsApp'));

    var MainCtrl
            , scope
            , location
            , httpBackend
            , resource
            , onesMock
            , onesMock_Key2
            , couch
            , util
            , contentArea
            , routeParams
            ;
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, $location, $httpBackend, $resource, $routeParams, OnesMock, OnesMock_Key2, Couch, Util) {
        scope = $rootScope.$new();
        location = $location;
        httpBackend = $httpBackend;
        resource = $resource;
        onesMock = OnesMock;
        onesMock_Key2 = OnesMock_Key2;
        couch = Couch;
        util = Util;
        routeParams = $routeParams;
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
            ,$routeParams: routeParams
        });
        contentArea = $controller('ContentAreaCtrl', {
            $scope: scope
            ,$routeParams: routeParams
        });
    }));

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    xit('should attach a list of awesomeThings to the scope', function () {
        expect(scope.awesomeThings.length).toBe(3);
    });

    it('should be located at "/"', function () {
        expect(location.url()).toBe('/');
        expect(location.url()).not.toBe('/somethingelse');
        expect(location.url()).not.toBe('');
    });

    xit('should be able to generate a random color', function() {
        expect(scope.getRandomColor().length).toBe(7);
    });

    it('should be able to access a couch db', function() {
        httpBackend.when('GET', /localhost\/testing\/_design\/numbering\/_view\/ones\?.*key="2"/).respond(onesMock_Key2);
        httpBackend.when('JSONP', /localhost\/testing\/_design\/numbering\/_view\/ones\?.*key="2"/).respond(onesMock_Key2);
        httpBackend.when('JSONP', "http://localhost:5984/testing/_design/numbering/_view/ones?callback=JSON_CALLBACK&jsonp=JSON_CALLBACK&key=%222%22").respond(onesMock_Key2);
        httpBackend.when('JSONP', "http://localhost/testing/_design/numbering/_view/ones?callback=JSON_CALLBACK&jsonp=JSON_CALLBACK&key=%222%22").respond(onesMock_Key2);
        httpBackend.when('GET', /localhost\/testing\/_design\/numbering\/_view\/ones/).respond(onesMock);
        httpBackend.when('JSONP', /localhost\/testing\/_design\/numbering\/_view\/ones/).respond(onesMock);
        httpBackend.when('JSONP', "http://localhost:5984/testing/_design/numbering/_view/ones?callback=JSON_CALLBACK&jsonp=JSON_CALLBACK").respond(onesMock);
        httpBackend.when('JSONP', "http://localhost/testing/_design/numbering/_view/ones?callback=JSON_CALLBACK&jsonp=JSON_CALLBACK").respond(onesMock);

        var c = couch("http://localhost:5984/testing/_design/numbering/_view/ones");
        c.get().then(function(ret) {
            var value = ret.data.rows;
            expect(value.length).toBe(3);
        }, function() {
            expect('could not retrieve data (numbering)').toBe("");
        });

        var k = couch("http://localhost:5984/testing/_design/numbering/_view/ones", {"key": '"2"'});
        k.get().then(function(ret) {
            var value = ret.data.rows;
            expect(value.length).toBe(1);
        }, function() {
            expect('could not retrieve data (numbering ones)').toBe("");
        });

        httpBackend.flush();
    });

    it('should be able to scope.go() to another page', function() {
        scope.go("/about");
        expect(location.url()).toBe('/about');
        expect(location.url()).not.toBe('/');

        scope.go("/experience");
        expect(location.url()).toBe('/experience');
        expect(location.url()).not.toBe('/');

        scope.go("/");
        expect(location.url()).toBe('/');
        expect(location.url()).not.toBe('/about');
    });

    xit('should know the url for sample data', function () {
        httpBackend.when('GET', 'http://localhost/testing/_design/numbering/_view/ones').respond(onesMock);


        var url = "http://localhost:5984/testing/_design/numbering/_view/ones";

        var res = resource(url);
//        var ret = res.get({}, function () {
//                    console.log("ret", ret);
//                });
        var ret = res.query({}, function () {
//            console.log("ret", ret);
        });

//        expect(MainCtrl.testDB()).toBe(true);
        httpBackend.flush();
    });

    describe("Util", function() {
        it("should convert a string to sentence case", function() {
            var orig = "this is a test";
            var expected = "This is a test";
            var converted = util.sentenceCase(orig);
            expect(converted).toBe(expected);
        });
    });
});
