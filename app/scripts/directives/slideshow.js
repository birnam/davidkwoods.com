'use strict';

angular.module('davidkwoodsApp')
       .directive('slideshow', function() {
            return {
                templateUrl: "../../views/slideshow.html"
                ,controller: "SlideshowCtrl"
                ,replace: true
                ,scope: {}
                ,link: function(scope) {
                }
            };
        });