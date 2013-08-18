'use strict';

angular.module('davidkwoodsApp', [
            'ngResource'
            ,'davidkwoodsApp.services'
        ])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl'
                    })
                    .when('/about', {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl'
                    })
                    .when('/skills', {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl'
                    })
                    .when('/clients', {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl'
                    })
                    .when('/portfolio', {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl'
                    })
                    .when('/contact', {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl'
                    })
                    .when('/test.html', {
                        templateUrl: 'views/dbtests.html',
                        controller: 'DBTests'
                    })
                    .when('/testtt', {
                        templateUrl: 'views/dbtests.html',
                        controller: 'DBTests'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
            $locationProvider.html5Mode(true);

        });

angular.module('davidkwoodsApp.services', [ 'ng' ]);