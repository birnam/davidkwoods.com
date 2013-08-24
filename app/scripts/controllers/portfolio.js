'use strict';

angular.module('davidkwoodsApp')
        .controller('PortfolioCtrl', function ($scope, $rootScope, $q, PageContent, CodeSamples, Flickr, ErrorsModel, Portfolio) {
            $scope.showSection = "portfolio";
            $scope.portfolio = [];

            PageContent.getPage("portfolio").then(function(ret) {
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

            CodeSamples.getCodeSamples().then(function(ret) {
                $scope.codeSampleGroups = ret;
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            }, function(msg) {
                console.log("Error retrieving code samples.  " + msg);
            });

            Portfolio.getPortfolio().then(function(ret) {
                $scope.portfolio = ret;
            }, function(msg) {
                console.log("error retrieving portfolio", msg);
            });
        });
