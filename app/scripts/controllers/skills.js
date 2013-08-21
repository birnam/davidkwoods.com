'use strict';

angular.module('davidkwoodsApp')
        .controller('SkillsCtrl', function ($scope, $resource, PageContent) {
            PageContent.getPage("skills").then(function(ret) {
                angular.extend($scope, ret);
            });
        });
