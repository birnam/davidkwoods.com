'use strict';

angular.module('davidkwoodsApp')
        .controller('PortfolioItemCtrl', function ($scope, $rootScope, $q, Flickr) {
            if (!$scope.port.primaryimg) {
                $rootScope.$emit("appendLog", "PortfolioItemCtrl for " + $scope.port.title + " has a photo gallery. Request primary photo for thumbnail.");

                Flickr.getPrimaryPhoto($scope.port.setid).then(function(ret) {
                    $scope.bgimg = 'url("' + ret + '")';
                    $scope.port.primaryimg = $scope.bgimg;
                });
            } else {
                $scope.bgimg = $scope.port.primaryimg;
            }

            $scope.showSlideshow = function(setid) {
                $rootScope.$emit("appendLog", "PortfolioItem controller has received a click event, launch slideshow for set #" + setid);

                $rootScope.$emit("loadimages", setid);
            }
        });
