'use strict';

angular.module('davidkwoodsApp')
        .controller('ClientsCtrl', function ($scope, PageContent, Experience, ErrorsModel) {
            PageContent.getPage("experience").then(function(ret) {
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

            Experience.getExperience().then(function(ret) {
                $scope.clientGroups = ret;
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            }, function(msg) {
                console.log("Error retrieving experience.  " + msg);
            });
        });
