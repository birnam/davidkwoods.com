'use strict';

angular.module('davidkwoodsApp.main', [ 'ngResource' ])
  .controller('MainCtrl', function ($scope, $resource, $log) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.testDB = function() {
        var url = "http://localhost:5984/testing/_design/numbering/_view/ones";

        var res = $resource(url);
        var ret = res.query({}, function() {
            console.log("ret", ret);
        });

        return true;
    }
  });
