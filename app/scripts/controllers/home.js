'use strict';

angular.module('davidkwoodsApp')
        .controller('HomeCtrl', function ($scope, PageContent) {
            PageContent.getPage("").then(function(ret) {
                if (ret && ret.data) {
                    if (ret.data.rows && ret.data.rows.length > 0) {
                        angular.extend($scope, ret.data.rows[0].value);
                    } else if (ret.data.value) {
                        angular.extend($scope, ret.data.value);
                    }
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                }
            });
        });
