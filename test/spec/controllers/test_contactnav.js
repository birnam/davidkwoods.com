'use strict';

describe('Factory: ContactNav', function () {

    // load the controller's module
    beforeEach(module('davidkwoodsApp'));

    var contactNavCtrl
            , scope
            , httpBackend
            , contactNav
            , contactNavMock
            , db
            ;
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, ContactNavFactory, $httpBackend, ContactNavMock, DB) {
        scope = $rootScope.$new();
        contactNav = ContactNavFactory;
        httpBackend = $httpBackend;
        contactNavMock = ContactNavMock;
        db = DB;

        contactNavCtrl = $controller('MainCtrl', {
            $scope: scope
            ,ContactNavFactory: contactNav
            ,DB: db
        });
    }));

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should provide a "get" function', function() {
        expect(typeof(contactNav.get)).toBe('function');
    })

    it('should be able to "get" data', function() {
        httpBackend.when('JSONP', db + "/_design/contactNav/_view/items?callback=JSON_CALLBACK&jsonp=JSON_CALLBACK").respond(contactNavMock);

        contactNav.get().then(function(ret) {
            expect(ret).toBeDefined();
            expect(ret.length).toBe(5);
        }, function(msg) {
            expect(msg).toBe("");
        });

        httpBackend.flush();
    });
});
