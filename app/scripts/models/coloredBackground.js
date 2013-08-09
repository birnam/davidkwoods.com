angular.module("davidkwoodsApp.main")
       .factory("ColoredBackgroundModel", function() {
            return {
                color: "#bada55"
                ,getCombined: function() {
                    return this.color;
                }
            }
        });