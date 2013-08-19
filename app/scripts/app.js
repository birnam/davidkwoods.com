'use strict';

angular.module('davidkwoodsApp', [
            'ngResource'
            ,'davidkwoodsApp.services'
        ])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider
//                    .when('/about', {
//                        templateUrl: 'views/view.html',
//                        controller: 'ViewCtrl'
//                    })
//                    .when('/skills', {
//                        templateUrl: 'views/main.html',
//                        controller: 'MainCtrl'
//                    })
//                    .when('/clients', {
//                        templateUrl: 'views/main.html',
//                        controller: 'MainCtrl'
//                    })
//                    .when('/portfolio', {
//                        templateUrl: 'views/main.html',
//                        controller: 'MainCtrl'
//                    })
//                    .when('/contact', {
//                        templateUrl: 'views/main.html',
//                        controller: 'MainCtrl'
//                    })
                    .when('/test.html', {
                        templateUrl: 'views/dbtests.html',
                        controller: 'DBTests'
                    })
                    .when('/testtt', {
                        templateUrl: 'views/dbtests.html',
                        controller: 'DBTests'
                    })
                    .when('/:id', {
                        templateUrl: 'views/viewContainer.html',
                        controller: 'ViewContainerCtrl'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
            $locationProvider.html5Mode(true);

        });

angular.module('davidkwoodsApp.services', [ 'ng' ]);