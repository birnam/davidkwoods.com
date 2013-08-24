'use strict';

angular.module('davidkwoodsApp')
        .controller('SlideshowCtrl', function ($scope, $rootScope, Flickr) {
            $scope.curIndex = 0;
            $scope.showSlideshow = false;
            $scope.wheelAccumulate = 0;

            // catch scrolling
            $('#slideshow').bind('mousewheel DOMMouseScroll', function(e) {
                var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
                if ($scope.photos && $scope.photos.length > 1) {
                    // reset if changing directions
                    if (Math.abs($scope.wheelAccumulate + delta) < Math.abs($scope.wheelAccumulate)) {
                        $scope.wheelAccumulate = 0;
                    }

                    // reduce to just 1 or -1
                    $scope.wheelAccumulate += (delta / Math.abs(delta));

                    if (Math.abs($scope.wheelAccumulate) > 30) {
                        $rootScope.$emit("appendLog", "use mouse wheel to scroll through photos in slideshow");

                        if ($scope.wheelAccumulate < 0 && $scope.curIndex > 0) {
                            $scope.showPrev();
                        } else if ($scope.wheelAccumulate > 0 && $scope.curIndex < $scope.photos.length - 1) {
                            $scope.showNext();
                        }
                        $scope.wheelAccumulate = 0;
                    }
                }
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
                e.preventDefault();
            });

            $rootScope.$on("loadimages", angular.bind(this, function(event, setid) {
                $scope.curIndex = 0;
                $scope.showSlideshow = true;

                $rootScope.$emit("appendLog", "open slideshow with Flickr set# " + setid);

                Flickr.getPhotoSet(setid).then(angular.bind(this, function(ret) {
                    var newphotos = [];
                    for (var i=0; i<ret.photo.length; i++) {
                        newphotos.push(buildPhotoObject(i, ret.photo[i]));
                    }

                    $scope.photos = angular.copy(newphotos);
                }), angular.bind(this, function(ret) {
                    $rootScope.$emit("appendLogError", "ERROR! could not load Flickr set# " + setid);

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
                $rootScope.$emit("appendLog", "increase $scope.curIndex to show next image");

                $scope.curIndex = Math.min($scope.photos.length - 1, $scope.curIndex + 1);
            }

            $scope.showPrev = function() {
                $rootScope.$emit("appendLog", "decrease $scope.curIndex to show prev image");

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

                $rootScope.$emit("appendLog", "build flickr photo url for photo " + photo);

                return pic;
            }
        });
