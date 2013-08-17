'use strict';

angular.module('davidkwoodsApp')
       .directive('homePage', function() {
            return {
                templateUrl: "../../views/home.html"
                ,controller: "HomeCtrl"
                ,link: function(scope) {
                }
            };
        });