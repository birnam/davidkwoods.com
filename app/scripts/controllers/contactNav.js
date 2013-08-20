'use strict';

angular.module('davidkwoodsApp')
        .controller('ContactNavCtrl', function ($scope, ContactNavFactory) {
            $scope.navContact = [];

            ContactNavFactory.get().then(function (ret) {
                $scope.navContact = [];
                for (var item in ret) {
                    $scope.navContact.push(ret[item].value);
                }

                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            }, function (msg) {
                $scope.navContact = [];

                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            });
        });
