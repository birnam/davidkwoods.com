'use strict';

angular.module('davidkwoodsApp')
        .controller('ContentAreaCtrl', function ($scope, $location) {
//            $scope.navMain = [
//                { title: "One", url: "/1" }
//            ];

            $scope.go = function(url) {
                $location.path(url);
            }
        });
