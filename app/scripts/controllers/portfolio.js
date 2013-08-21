'use strict';

angular.module('davidkwoodsApp')
        .controller('PortfolioCtrl', function ($scope, $resource, PageContent) {
            PageContent.getPage("portfolio").then(function(ret) {
                if (ret && ret.data && ret.data.rows && ret.data.rows.length > 0) {
                    angular.extend($scope, ret.data.rows[0].value);
                }
            });
        });
