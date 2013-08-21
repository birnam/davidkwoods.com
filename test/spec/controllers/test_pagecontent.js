'use strict';

describe('Provider: PageContent', function () {

    var mainNavCtrl
            , homePageCtrl
            , scope
            , httpBackend
            , pageContent
            , pageContentMock
            , db
            ;

    // load the controller's module
    beforeEach(module('davidkwoodsApp'));

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, PageContent, $httpBackend, PageContentMock, DB) {
        scope = $rootScope.$new();
        pageContent = PageContent;
        httpBackend = $httpBackend;
        db = DB;
        pageContentMock = PageContentMock;

        httpBackend.when('JSONP', db + "/_design/pages/_view/item?callback=JSON_CALLBACK&jsonp=JSON_CALLBACK&key=%22%22").respond(pageContentMock.rows[0]);
        httpBackend.when('JSONP', db + "/_design/pages/_view/item?callback=JSON_CALLBACK&jsonp=JSON_CALLBACK&key=%22about%22").respond(pageContentMock.rows[1]);
        httpBackend.when('JSONP', db + "/_design/pages/_view/item?callback=JSON_CALLBACK&jsonp=JSON_CALLBACK&key=%22contact%22").respond(pageContentMock.rows[2]);
        httpBackend.when('JSONP', db + "/_design/pages/_view/item?callback=JSON_CALLBACK&jsonp=JSON_CALLBACK&key=%22experience%22").respond(pageContentMock.rows[3]);
        httpBackend.when('JSONP', db + "/_design/pages/_view/item?callback=JSON_CALLBACK&jsonp=JSON_CALLBACK&key=%22portfolio%22").respond(pageContentMock.rows[4]);
        httpBackend.when('JSONP', db + "/_design/pages/_view/item?callback=JSON_CALLBACK&jsonp=JSON_CALLBACK&key=%22skills%22").respond(pageContentMock.rows[5]);

        mainNavCtrl = $controller('MainCtrl', {
            $scope: scope
            ,PageContent: pageContent
            ,DB: db
        });
        homePageCtrl = $controller('HomeCtrl', {
            $scope: scope
            ,PageContent: pageContent
            ,DB: db
        });

        httpBackend.flush();
    }));

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should provide a "getPage" function', function() {
        expect(typeof(pageContent.getPage)).toBe('function');
    })

    it('should be able to "getPage" home content', function() {
        pageContent.getPage("").then(function(ret) {
            expect(ret).toBeDefined();
            expect(ret.data).toBeDefined();
            expect(ret.data.value).toBeDefined();
        }, function(msg) {
            expect(msg).toBe("");
        });

    });

    it('should pull previously retrieved content from cache', function() {
        expect(function() { httpBackend.flush() }).toThrow("No pending request to flush !");
    });

    it('should be able to "getPage" about content', function() {
        pageContent.getPage("about").then(function(ret) {
            expect(ret).toBeDefined();
            expect(ret.data).toBeDefined();
            expect(ret.data.value).toBeDefined();
        }, function(msg) {
            expect(msg).toBe("");
        });

        httpBackend.flush();
    });

    it('should be able to "getPage" experience content', function() {
        pageContent.getPage("experience").then(function(ret) {
            expect(ret).toBeDefined();
            expect(ret.data).toBeDefined();
            expect(ret.data.value).toBeDefined();
        }, function(msg) {
            expect(msg).toBe("");
        });

        httpBackend.flush();
    });

    it('should not require additional $http requests', function() {
        expect(function() { httpBackend.flush() }).toThrow("No pending request to flush !");
    });

    it('should have populated scope', function() {
        expect(scope.title).toBeDefined();
        expect(scope.content).toBeDefined();
    });
});
