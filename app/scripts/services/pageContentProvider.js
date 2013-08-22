'use strict';

angular.module("davidkwoodsApp")
       .provider("PageContent", function() {
            this.dbpath = "/_design/pages/_view/item";

            this.$get = function(DB, $q, Couch) {
                return {
                    title: ""
                    ,content: ""
                    ,dbpath: this.dbpath

                    ,getPage: function(path) {
                        var couch = Couch(DB + this.dbpath, {key: '"'+path+'"'});
                        return couch.get();
                    }
                };
            };
        });