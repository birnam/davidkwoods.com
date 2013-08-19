'use strict';

angular.module('davidkwoodsApp')
        .controller('ContentAreaCtrl', function ($scope, $rootScope, $routeParams, $location, Util) {
            setPage($routeParams.id);

            $scope.go = function(url) {
                $location.path(url);
            }

            function setPage(str) {
                $scope.pageRoute = str;

                if (typeof(str) == "undefined" || str == "") {
                    $rootScope.pageTitle = " :: Home";
                } else {
                    $rootScope.pageTitle = " :: " + Util.sentenceCase(str);
                }
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            }
        });
