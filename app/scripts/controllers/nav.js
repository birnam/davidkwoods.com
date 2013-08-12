'use strict';

angular.module('davidkwoodsApp')
        .controller('MainNavCtrl', function ($scope, $resource) {
            $scope.mainNav = [
                { title: "a", url: "/", class: "home" }
                ,{ title: "Who am I?", url: "/about" }
                ,{ title: "Skills", url: "/skills" }
                ,{ title: "Experience", url: "/clients" }
                ,{ title: "Work", url: "/portfolio" }
                ,{ title: "Contact", url: "/contact" }
            ];
        });
