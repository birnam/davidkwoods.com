'use strict';

angular.module('davidkwoodsApp')
       .directive('clientsPage', function() {
            return {
                templateUrl: "../../views/clients.html"
                ,controller: "ClientsCtrl"
                ,link: function(scope) {
                }
            };
        });