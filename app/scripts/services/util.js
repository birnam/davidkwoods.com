'use strict';

angular.module('davidkwoodsApp.services')
    .factory("Util", function() {
            return {
                sentenceCase: function(str) {
                    return str.charAt(0).toUpperCase() + str.substr(1);
                }
            };
        });