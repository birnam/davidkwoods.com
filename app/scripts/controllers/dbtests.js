'use strict';

angular.module('davidkwoodsApp.main', [])
        .controller('DBTests', function ($scope, Couch) {

            $scope.Ones = [  ];
            $scope.OnesKey2 = [  ];

            $scope.fetchOnes = function() {
                var res = Couch('http://localhost:5984/testing/_design/numbering/_view/ones');
                var ret = res.query(function(value) {
                    $scope.Ones = value;
                });

                var res2 = Couch('http://localhost:5984/testing/_design/numbering/_view/ones', {"key": '"2"'});
                var ret2 = res2.query(function(value) {
                    $scope.OnesKey2 = value;
                });
            };

        });
