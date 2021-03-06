'use strict';

describe('Factory: ContactNav', function () {

    var mainNavCtrl
            , contactNavCtrl
            , scope
            , httpBackend
            , contactNav
            , contactNavMock
            , db
            ;

    // load the controller's module
    beforeEach(module('davidkwoodsApp'));

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, ContactNavFactory, $httpBackend, ContactNavMock, DB) {
        scope = $rootScope.$new();
        contactNav = ContactNavFactory;
        httpBackend = $httpBackend;
        db = DB;
        contactNavMock = ContactNavMock;

        httpBackend.when('JSONP', db + "/_design/contactNav/_view/items?callback=JSON_CALLBACK&jsonp=JSON_CALLBACK").respond(contactNavMock);

        mainNavCtrl = $controller('MainCtrl', {
            $scope: scope
            ,ContactNavFactory: contactNav
            ,DB: db
        });

        contactNavCtrl = $controller('ContactNavCtrl', {
            $scope: scope
            ,ContactNavFactory: contactNav
            ,DB: db
        });

        httpBackend.flush();
    }));

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should provide a "get" function', function() {
        expect(typeof(contactNav.get)).toBe('function');
    })

    it('should be able to "get" data', function() {
        contactNav.get().then(function(ret) {
            expect(ret).toBeDefined();
            expect(ret.length).toBeGreaterThan(0);
        }, function(msg) {
            expect(msg).toBe("");
        });
    });

    it('should not require additional $http requests', function() {
        expect(function() { httpBackend.flush() }).toThrow("No pending request to flush !");
    });

    it('should have populated scope.navContact', function() {
        expect(scope.navContact).toBeDefined();
        expect(scope.navContact.length).toBeGreaterThan(0);
    });
});
