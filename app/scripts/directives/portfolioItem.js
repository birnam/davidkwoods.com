'use strict';

angular.module('davidkwoodsApp')
       .directive('portfolioItem', function() {
            return {
                templateUrl: "../../views/portfolioItem.html"
                ,controller: "PortfolioItemCtrl"
                ,replace: true
                ,scope: {
                    port: "=portItem"
                }
                ,link: function(scope) {
                }
            };
        });