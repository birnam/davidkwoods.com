'use strict';

angular.module("davidkwoodsApp")
       .provider("PageContent", function() {
            this.dbpath = "/_design/pages/_view/item";

            this.$get = function(DB, $q, $rootScope, Couch) {
                return {
                    title: ""
                    ,content: ""
                    ,dbpath: this.dbpath

                    ,getPage: function(path) {
                        $rootScope.$emit("appendLog", "PageContentProvider is requesting content for page " + path + " from the Couch service");

                        var couch = Couch(DB + this.dbpath, {key: '"'+path+'"'});
                        return couch.get();
                    }
                };
            };
        });