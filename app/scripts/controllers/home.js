'use strict';

angular.module('davidkwoodsApp')
        .controller('HomeCtrl', function ($scope, $resource, PageContent) {
            PageContent.getPage("").then(function(ret) {
                angular.extend($scope, ret);
            });
        });
