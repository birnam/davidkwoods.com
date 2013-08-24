'use strict';

angular.module('davidkwoodsApp')
        .controller('ContactNavCtrl', function ($scope, $rootScope, ContactNavFactory) {
            $scope.navContact = [];

            ContactNavFactory.get().then(function (ret) {
                $rootScope.$emit("appendLog", "contact nav has received nav items");

                $scope.navContact = [];
                for (var item in ret) {
                    $scope.navContact.push(ret[item].value);
                }

                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            }, function (msg) {
                $rootScope.$emit("appendLogError", "ERROR!! ContactNavCtrl failed to receive any nav items");

                $scope.navContact = [];

                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            });
        });
