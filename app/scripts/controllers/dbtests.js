'use strict';

angular.module('davidkwoodsApp')
        .controller('DBTests', function ($scope, Couch) {

            $scope.Ones = [  ];
            $scope.OnesKey2 = [  ];

            $scope.fetchOnes = function() {
                var res = Couch('http://localhost:5984/testing/_design/numbering/_view/ones');
                res.get().then(function(ret) {
                    $scope.Ones = ret.data.rows;
                });

                var res2 = Couch('http://localhost:5984/testing/_design/numbering/_view/ones', {"key": '"2"'});
                res2.get().then(function(ret) {
                    $scope.OnesKey2 = ret.data.rows;
                });
            };

        });
