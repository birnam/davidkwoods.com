'use strict';

angular.module("davidkwoodsApp")
       .directive("navItem", function() {
            return {
                link: function(scope, element, attrs) {
                    $(element).click(function(event) {
//                        event.preventDefault();
//                        event.stopPropagation();
//                        event.stopImmediatePropagation();

                        scope.nav(attrs.url);
                    });
                }
            };
        });