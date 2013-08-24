'use strict';

angular.module('davidkwoodsApp')
        .controller('PortfolioCtrl', function ($scope, $rootScope, $q, PageContent, CodeSamples, Flickr, ErrorsModel, Portfolio) {
            $scope.showSection = "portfolio";
            $scope.portfolio = [];

            PageContent.getPage("portfolio").then(function(ret) {
                $rootScope.$emit("appendLog", "portfolio controller has received page content");

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
                $rootScope.$emit("appendLog", "portfolio controller has received code samples");

                $scope.codeSampleGroups = ret;
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            }, function(msg) {
                $rootScope.$emit("appendLogError", "ERROR!! PortfolioCtrl did not recieve code camples");

                console.log("Error retrieving code samples.  " + msg);
            });

            Portfolio.getPortfolio().then(function(ret) {
                $rootScope.$emit("appendLog", "portfolio controller has received portfolio data");

                $scope.portfolio = ret;
            }, function(msg) {
                $rootScope.$emit("appendLogError", "ERROR!! PortfolioCtrl did not receive portfolio data");

                console.log("error retrieving portfolio", msg);
            });
        });
