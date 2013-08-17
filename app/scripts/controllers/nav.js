'use strict';

angular.module('davidkwoodsApp')
        .controller('MainNavCtrl', function ($scope, $rootScope, $location) {
            $scope.mainNav = [
                { title: "a", url: "/", class: "home" }
                ,{ title: "Who am I?", url: "/about" }
                ,{ title: "Skills", url: "/skills" }
                ,{ title: "Experience", url: "/clients" }
                ,{ title: "Work", url: "/portfolio" }
                ,{ title: "Contact", url: "/contact" }
            ];

            $rootScope.$on('$locationChangeSuccess', function(event, newloc, oldloc) {
                console.log("LOC CHANGE", arguments);
            });

            $scope.nav = function(url) {
                console.log("new url", url);
                $location.path(url);
                $scope.$apply();
            }
        });
