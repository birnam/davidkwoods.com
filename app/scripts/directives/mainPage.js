'use strict';

angular.module('davidkwoodsApp')
       .directive('mainPage', function() {
            return {
                templateUrl: "../../views/main.html"
                ,controller: "MainCtrl"
                ,replace: true
                ,link: function(scope) {
                    scope.hName = "world";
                }
            };
        });