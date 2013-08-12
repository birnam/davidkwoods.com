'use strict';

angular.module('davidkwoodsApp')
       .directive('portfolioPage', function() {
            return {
                templateUrl: "../../views/portfolio.html"
                ,controller: "PortfolioCtrl"
                ,link: function(scope) {
                }
            };
        });