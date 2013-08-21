'use strict';

angular.module("davidkwoodsApp")
       .provider("PageContent", function() {
            this.dbpath = "/_design/pages/_view/item";

            this.$get = function(DB, $q, Couch) {
                return {
                    title: "this is a title"
                    ,content: "this is content<br/>" + DB + this.dbpath
                    ,dbpath: this.dbpath

                    ,getPage: function(path) {
//                        var deferred = $q.defer();
//                        deferred.resolve({title: this.title, content: this.content});
//                        return deferred.promise;

                        var couch = Couch(DB + this.dbpath, {key: '"'+path+'"'});
//                        return couch.get();

                        return couch.get();
                    }
                };
            };
        });