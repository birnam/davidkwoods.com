'use strict';

angular.module('davidkwoodsApp')
        .controller('MainNavCtrl', function ($scope, $rootScope, $location) {
            $scope.selectRoute = "";

            $scope.mainNav = [
                { title: "a", url: "/", class: "home" }
                ,{ title: "Who am I?", url: "/about" }
                ,{ title: "Skills", url: "/skills" }
                ,{ title: "Experience", url: "/clients" }
                ,{ title: "Work", url: "/portfolio" }
                ,{ title: "Contact", url: "/contact" }
            ];

            $rootScope.$on('$locationChangeSuccess', function(event, newloc, oldloc) {
                switch($location.path()) {
                    case "/about":
                    case "/skills":
                    case "/clients":
                    case "/portfolio":
                    case "/contact":
                        $scope.selectRoute = "select_" + $location.path().replace("/", "");
                        break;
                    default:
                        $scope.selectRoute = "select_home";
                }
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            });

            $scope.nav = function(url) {
//                console.log("new url", url);
                $location.path(url);
                $scope.$apply();
            }
        });
