'use strict';

angular.module('davidkwoodsApp')
       .directive('logViewer', function() {
            return {
                templateUrl: "../../views/logViewer.html"
                ,controller: "LogViewerCtrl"
                ,replace: true
                ,scope: {}
                ,link: function(scope) {
                }
            };
        });