'use strict';

angular.module('davidkwoodsApp')
       .directive('aboutPage', function() {
            return {
                templateUrl: "../../views/about.html"
                ,controller: "AboutCtrl"
                ,link: function(scope) {
                }
            };
        });