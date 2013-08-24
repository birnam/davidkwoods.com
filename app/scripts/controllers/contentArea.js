'use strict';

angular.module('davidkwoodsApp')
        .controller('ContentAreaCtrl', function ($scope, $rootScope, $routeParams, $location, Util) {
            $scope.page404 = "/views/404.html";

            setPage($routeParams.id);

            $scope.go = function(url) {
                $rootScope.$emit("appendLog", "ContentAreaCtrl is redirecting user to " + url);

                $location.path(url);
            }

            function setPage(str) {
                $rootScope.$emit("appendLog", "ContentAreaCtrl is setting visible page to " + str);

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
