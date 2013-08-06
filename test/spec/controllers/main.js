'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('davidkwoodsApp'));

    var MainCtrl
            , scope
            , location
            ;
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, $location) {
        scope = $rootScope.$new();
        location = $location;
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.awesomeThings.length).toBe(3);
    });

    it('should be located at "/"', function () {
        expect(location.url()).toBe('/');
        expect(location.url()).not.toBe('/somethingelse');
        expect(location.url()).not.toBe('');
    });

    it('should know the url for sample data', function () {
        expect(MainCtrl.testDB()).toBe(true);
    });
});
