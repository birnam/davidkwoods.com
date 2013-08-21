'use strict';

angular.module('davidkwoodsApp')
        .controller('PortfolioCtrl', function ($scope, $resource, PageContent) {
            PageContent.getPage("portfolio").then(function(ret) {
                angular.extend($scope, ret);
            });
        });
