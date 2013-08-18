'use strict';

angular.module('davidkwoodsApp')
        .controller('ContentAreaCtrl', function ($scope, $rootScope, $location, Util) {
            setPage($location.path());

            $rootScope.$on('$locationChangeSuccess', function(event, newloc, oldloc) {
                setPage($location.path());
            });

            $scope.go = function(url) {
                $location.path(url);
            }

            function setPage(str) {
                $scope.pageRoute = str;


                if (str == "/") {
                    $rootScope.pageTitle = " :: Home";
                } else {
                    $rootScope.pageTitle = " :: " + Util.sentenceCase(str.replace("/", ""));
                }
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            }
        });
