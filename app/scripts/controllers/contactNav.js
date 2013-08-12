'use strict';

angular.module('davidkwoodsApp')
        .controller('ContactNavCtrl', function ($scope, $resource) {
            $scope.navContact = [
                { title: "z", url: "/1" }
                ,{ title: "F", url: "/2" }
                ,{ title: "J", url: "/3" }
                ,{ title: "3", url: "/4" }
            ];
        });
