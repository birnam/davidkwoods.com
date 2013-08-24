'use strict';

angular.module('davidkwoodsApp.services')
    .factory("Util", function($rootScope) {
            return {
                sentenceCase: function(str) {
                    $rootScope.$emit("appendLog", "Util factory is converting a string into sentence case");

                    return str.charAt(0).toUpperCase() + str.substr(1);
                }
            };
        });