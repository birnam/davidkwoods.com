'use strict';

angular.module('davidkwoodsApp')
        .controller('ClientsCtrl', function ($scope, $resource, PageContent) {
            PageContent.getPage("experience").then(function(ret) {
                if (ret && ret.data && ret.data.rows && ret.data.rows.length > 0) {
                    angular.extend($scope, ret.data.rows[0].value);
                }
            });
        });
