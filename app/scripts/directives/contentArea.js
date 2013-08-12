'use strict';

angular.module('davidkwoodsApp')
       .directive('contentArea', function() {
            return {
                templateUrl: "../../views/contentArea.html"
                ,replace: true
                ,controller: "ContentAreaCtrl"
                ,link: function(scope) {
                }
            };
        });