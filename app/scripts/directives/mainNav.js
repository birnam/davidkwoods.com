'use strict';

angular.module('davidkwoodsApp')
        .directive('navMain', function() {
            return {
                templateUrl: '../../views/nav.html'
                ,controller: 'MainNavCtrl'
                ,replace: true
                ,link: function(scope, iElement, iAttrs, controller) {
                }
            };
        });
