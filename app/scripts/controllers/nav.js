'use strict';

angular.module('davidkwoodsApp')
        .controller('MainNavCtrl', function ($scope, $rootScope, $routeParams, $location) {
            setSelection();

            $scope.mainNav = [
                { title: "a", url: "/", class: "home" }
                ,{ title: "Who am I?", url: "/about" }
                ,{ title: "Skills", url: "/skills" }
                ,{ title: "Experience", url: "/experience" }
                ,{ title: "Work", url: "/portfolio" }
                ,{ title: "Contact", url: "/contact" }
            ];

            function setSelection() {
                switch($routeParams.id.toLowerCase()) {
                    case "about":
                    case "skills":
                    case "clients":
                    case "experience":
                    case "portfolio":
                    case "contact":
                        $scope.selectRoute = "select_" + $routeParams.id.toLowerCase();
                        break;
                    case "":
                        $scope.selectRoute = "select_home";
                        break;
                    default:
                        $scope.selectRoute = "select_error";
                        break;
                }
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            }

            $scope.nav = function(url) {
                $location.path(url);
                $scope.$apply();
            }
        });
