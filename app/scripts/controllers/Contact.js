'use strict';

angular.module('davidkwoodsApp')
        .controller('ContactCtrl', function ($scope, $resource, PageContent) {
            PageContent.getPage("contact").then(function(ret) {
                angular.extend($scope, ret);
            });
        });
