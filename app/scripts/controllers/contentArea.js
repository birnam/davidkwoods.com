'use strict';

angular.module('davidkwoodsApp')
        .controller('ContentAreaCtrl', function ($scope, $rootScope, $location) {
            $scope.pageRoute = $location.path();

            $rootScope.$on('$locationChangeSuccess', function(event, newloc, oldloc) {
                $scope.pageRoute = $location.path();
                console.log("PageRoute", $scope.pageRoute);
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            });

            $scope.go = function(url) {
                $location.path(url);
            }
        });
