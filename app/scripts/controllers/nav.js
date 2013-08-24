'use strict';

angular.module('davidkwoodsApp')
        .controller('MainNavCtrl', function ($scope, $rootScope, $routeParams, $location, MainNavFactory) {
            setPreviousSelection();

            $scope.mainNav = [];

            MainNavFactory.get().then(function (ret) {
                $rootScope.$emit("appendLog", "MainNavCtrl has received nav items");

                $scope.mainNav = [];
                for (var item in ret) {
                    $scope.mainNav.push(ret[item].value);
                }

                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            }, function (msg) {
                $rootScope.$emit("appendLogError", "ERROR!! MainNavCtrl failed to receive nav items");

                $scope.mainNav = [];

                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            });

            function setPreviousSelection(selid) {
                // stupid redraw is killing my css transitions
                setSelection(selid);
                setTimeout(angular.bind(this, function() {
                    setSelection();
                }), 30);
            }

            function setSelection(selid) {

                if ($rootScope.prevPage != undefined && $rootScope.prevPage != null) {
                    var prev = $rootScope.prevPage;
                    $rootScope.prevPage = null;
                    setPreviousSelection(prev);
                    return;
                }

                selid = (selid == undefined || selid == null)?$routeParams.id.toLowerCase():selid;
                $rootScope.$emit("appendLog", "MainNavCtrl is selecting new item: " + selid);
                switch(selid) {
                    case "about":
                    case "skills":
                    case "clients":
                    case "experience":
                    case "portfolio":
                    case "contact":
                        $scope.selectRoute = "select_" + selid;
                        break;
                    case "":
                        $scope.selectRoute = "select_home";
                        break;
                    default:
                        $scope.selectRoute = "select_error";
                        break;
                }
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            }

            $rootScope.$on("$routeChangeSuccess", function(event, current, previous) {
                // the controller redraw is killing the animations, so we need to
                // store the previous page and set that one first when the page reloads
                $rootScope.$emit("appendLog", "MainNavCtrl has detected a route change");

                $rootScope.prevPage = previous.params.id;
            });

            $scope.nav = function(url) {
                $rootScope.$emit("appendLog", "MainNavCtrl has been clicked. Redirecting user to " + url);

                $location.path(url);
                $scope.$apply();
            }
        });
