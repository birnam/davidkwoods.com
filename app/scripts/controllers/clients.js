'use strict';

angular.module('davidkwoodsApp')
        .controller('ClientsCtrl', function ($scope, $resource, PageContent) {
            PageContent.getPage("experience").then(function(ret) {
                angular.extend($scope, ret);
            });
        });
