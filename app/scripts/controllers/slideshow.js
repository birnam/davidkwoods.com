'use strict';

angular.module('davidkwoodsApp')
        .controller('SlideshowCtrl', function ($scope, $rootScope, Flickr) {
            $scope.curIndex = 0;
            $scope.showSlideshow = false;

            $rootScope.$on("loadimages", angular.bind(this, function(event, setid) {
                $scope.curIndex = 0;
                $scope.showSlideshow = true;

                Flickr.getPhotoSet(setid).then(angular.bind(this, function(ret) {
                    var newphotos = [];
                    for (var i=0; i<ret.photo.length; i++) {
                        newphotos.push(buildPhotoObject(i, ret.photo[i]));
                    }

                    $scope.photos = angular.copy(newphotos);
                }), angular.bind(this, function(ret) {
                    console.log("can't access flickr. sorry!");
                }));
            }));

            $scope.setStyleForBackground = function(bg) {
                return {
                    backgroundImage: 'url("' + bg + '")'
                }
            }

            $scope.hide = function() {
                $scope.showSlideshow = false;
            }

            $scope.showNext = function() {
                $scope.curIndex = Math.min($scope.photos.length - 1, $scope.curIndex + 1);
            }

            $scope.showPrev = function() {
                $scope.curIndex = Math.max(0, $scope.curIndex - 1);
            }

            function buildPhotoObject(index, photo) {
                var pic = {
                    index: index
                    ,id: photo.id
                    ,farm: photo.farm
                    ,secret: photo.secret
                    ,server: photo.server
                    ,title: photo.title
                    ,description: photo.description._content
                };

                // example: http://farm8.static.flickr.com/7444/9574888338_e28589c6f5_b.jpg
                pic.image = "http://farm" + pic.farm +
                            ".static.flickr.com/" + pic.server +
                            "/" + pic.id + "_" + pic.secret + "_b.jpg";

                return pic;
            }
        });
