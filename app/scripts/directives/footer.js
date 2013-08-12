'use strict';

angular.module('davidkwoodsApp')
       .directive('footer', function() {
            return {
                templateUrl: "../../views/footer.html"
                ,controller: "FooterCtrl"
                ,replace: true
                ,link: function(scope) {
                }
            };
        });