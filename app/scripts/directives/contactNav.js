'use strict';

angular.module('davidkwoodsApp')
        .directive('navContact', function() {
            return {
                templateUrl: '../../views/contactNav.html'
                ,controller: 'ContactNavCtrl'
                ,replace: true
                ,link: function(scope, iElement, iAttrs, controller) {
                }
            };
        });
