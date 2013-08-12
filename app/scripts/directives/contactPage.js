'use strict';

angular.module('davidkwoodsApp')
       .directive('contactPage', function() {
            return {
                templateUrl: "../../views/contact.html"
                ,controller: "ContactCtrl"
                ,link: function(scope) {
                }
            };
        });