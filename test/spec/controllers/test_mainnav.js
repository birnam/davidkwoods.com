'use strict';

describe('Factory: MainNav', function () {

    var mainNavCtrl
            , mainNavCtrl
            , scope
            , httpBackend
            , routeParams
            , mainNav
            , mainNavMock
            , db
            ;

    // load the controller's module
    beforeEach(module('davidkwoodsApp'));

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, $routeParams, MainNavFactory, $httpBackend, MainNavMock, DB) {
        scope = $rootScope.$new();
        mainNav = MainNavFactory;
        httpBackend = $httpBackend;
        db = DB;
//        routeParams = $routeParams;
        routeParams = { id: "" };
        mainNavMock = MainNavMock;

        httpBackend.when('JSONP', db + "/_design/mainNav/_view/items?callback=JSON_CALLBACK&jsonp=JSON_CALLBACK").respond(mainNavMock);

        mainNavCtrl = $controller('MainCtrl', {
            $scope: scope
            ,MainNavFactory: mainNav
            ,DB: db
            ,$routeParams: routeParams
        });

        mainNavCtrl = $controller('MainNavCtrl', {
            $scope: scope
            ,MainNavFactory: mainNav
            ,DB: db
            ,$routeParams: routeParams
        });

        httpBackend.flush();
    }));

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should provide a "get" function', function() {
        expect(typeof(mainNav.get)).toBe('function');
    })

    it('should be able to "get" data', function() {
        mainNav.get().then(function(ret) {
            expect(ret).toBeDefined();
            expect(ret.length).toBeGreaterThan(0);
        }, function(msg) {
            expect(msg).toBe("");
        });
    });

    it('should not require additional $http requests', function() {
        expect(function() { httpBackend.flush() }).toThrow("No pending request to flush !");
    });

    it('should have populated scope.mainNav', function() {
        expect(scope.mainNav).toBeDefined();
        expect(scope.mainNav.length).toBeGreaterThan(0);
    });
});
