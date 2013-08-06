'use strict';

angular.module('davidkwoodsApp', [ 'davidkwoodsApp.main' ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);

//    $log.info("in app");
  });