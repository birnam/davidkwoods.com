'use strict';

angular.module('davidkwoodsApp')
        .controller('AboutCtrl', function ($scope, $resource, PageContent) {
                PageContent.getPage("about").then(function(ret) {
                    angular.extend($scope, ret);
                });
            });
