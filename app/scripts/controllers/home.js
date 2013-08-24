'use strict';

angular.module('davidkwoodsApp')
        .controller('HomeCtrl', function ($scope, $rootScope, PageContent, ErrorsModel) {
            PageContent.getPage("").then(function(ret) {
                $rootScope.$emit("appendLog", "HomeCtrl has receive page content");

                if (ret && ret.data) {
                    if (ret.data.rows && ret.data.rows.length > 0) {
                        angular.extend($scope, ret.data.rows[0].value);
                    } else if (ret.data.value) {
                        angular.extend($scope, ret.data.value);
                    } else {
                        $scope.title = ErrorsModel.content_not_found.title;
                        $scope.content = ErrorsModel.content_not_found.content;
                    }
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                }
            });
        });
