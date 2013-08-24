'use strict';

angular.module('davidkwoodsApp')
        .controller('LogViewerCtrl', function ($scope, $rootScope, $timeout) {

            $scope.logItems = $rootScope.logItems;

            // catch scrolling
            $('#logContainer .log').bind('mousewheel DOMMouseScroll', function(e) {
                var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
                $(this).scrollTop($(this).scrollTop() + ( delta < 0 ? 1 : -1 ) * 30);
                e.preventDefault();
            });

            $rootScope.$on("appendLog", angular.bind(this, function(event, msg) {
                appendLog(msg);
            }));

            $rootScope.$on("appendLogError", angular.bind(this, function(event, msg) {
                appendLog(msg, "error");
            }));

            function appendLog(msg, classname) {
                if (!$rootScope.logItems) {
                    $rootScope.logItems = [{
                        msg: "Logging initialized"
                    }];
                }
                if (msg != $rootScope.logItems[$rootScope.logItems.length - 1].msg) {
                    $rootScope.logItems.push({
                        msg: msg
                        ,class: classname
                    })
                    $scope.logItems = $rootScope.logItems;

                    $timeout(function() {
                        $('#logContainer .log').scrollTop($('#logContainer .log')[0].scrollHeight);
                    }, 10);
                }
            }

        });
