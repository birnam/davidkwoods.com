'use strict';

angular.module('davidkwoodsApp')
        .controller('AboutCtrl', function ($scope, PageContent) {
            PageContent.getPage("about").then(function(ret) {
                if (ret && ret.data && ret.data.rows && ret.data.rows.length > 0) {
                    angular.extend($scope, ret.data.rows[0].value);
                }
            });
        });
