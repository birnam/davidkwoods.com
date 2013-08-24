'use strict';

angular.module('davidkwoodsApp')
        .controller('PortfolioItemCtrl', function ($scope, $rootScope, $q, Flickr) {
            if (!$scope.port.primaryimg) {
                Flickr.getPrimaryPhoto($scope.port.setid).then(function(ret) {
                    $scope.bgimg = 'url("' + ret + '")';
                    $scope.port.primaryimg = $scope.bgimg;
                });
            } else {
                $scope.bgimg = $scope.port.primaryimg;
            }

            $scope.showSlideshow = function(setid) {
                $rootScope.$emit("loadimages", setid);
            }
        });
