'use strict';

angular.module('davidkwoodsApp')
       .directive('skillsPage', function() {
            return {
                templateUrl: "../../views/skills.html"
                ,controller: "SkillsCtrl"
                ,link: function(scope) {
                }
            };
        });