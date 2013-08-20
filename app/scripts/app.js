'use strict';

angular.module('davidkwoodsApp', [
            'ngResource'
            ,'davidkwoodsApp.services'
        ])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider
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