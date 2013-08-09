'use strict';

angular.module('davidkwoodsApp.main', [
            'ngResource'
        ])
        .controller('MainCtrl', function ($scope, $resource, $log, ColoredBackgroundModel) {
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];

            $scope.onClick = function() {
                $scope.bgColor.color = $scope.getRandomColor();
            };

            $scope.bgColor = ColoredBackgroundModel;
            $scope.$watch("bgColor", function() {
                $scope.bgProp = function() {
                    return {
                        backgroundColor: $scope.bgColor.color
                    };
                };
            });

            this.testDB = function () {
                var url = "http://localhost:5984/testing/_design/numbering/_view/ones";

                var res = $resource(url);
                var ret = res.query({}, function () {
                    console.log("ret", ret);
                });

                return true;
            };

            $scope.getRandomColor = function() {
                var r = Math.round(Math.random() *  255).toString(16);
                var g = Math.round(Math.random() *  255).toString(16);
                var b = Math.round(Math.random() *  255).toString(16);

                return "#" +
                        ((r.length == 1) ? ("0" + r) : r) +
                        ((g.length == 1) ? ("0" + g) : g) +
                        ((b.length == 1) ? ("0" + b) : b);
            };

        });
