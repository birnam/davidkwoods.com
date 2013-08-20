'use strict';

angular.module('davidkwoodsApp')
        .controller('ContactNavCtrl', function ($scope, ContactNavFactory) {
            $scope.navContact = [
//                {  title: "Email", target: "_blank", text: "z", url: "mailto:david@davidkwoods.com" }
//                ,{ title: "Facebook", target: "_blank", text: "F", url: "https://www.facebook.com/truegeek" }
//                ,{ title: "Twitter", target: "_blank", text: "J", url: "https://twitter.com/david_woods" }
//                ,{ title: "LinkedIn", target: "_blank", text: "3", url: "https://www.linkedin.com/in/davidkwoods/" }
            ];

            ContactNavFactory.get().then(function (ret) {
                $scope.navContact = [];
                for (var item in ret) {
                    console.log("item", ret[item]);
                    $scope.navContact.push(ret[item].value);
                }

                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            }, function (msg) {
                $scope.navContact = [];

                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            });

//            var res = Couch('http://localhost:5984/davidkwoods/_design/contactNav/_view/items');
//            var ret = res.query(function(value) {
//                console.log("value", value, ret);
//                $scope.items = value;
//            });
        });
