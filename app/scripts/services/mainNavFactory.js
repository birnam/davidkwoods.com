'use strict';

angular.module("davidkwoodsApp")
        .factory("MainNavFactory", function($q, Couch, DB) {
            return {
                items: null

                ,get: function(doReload) {
                    var deferred = $q.defer();

                    if (!doReload && this.items != null) {
                        deferred.resolve(this.items);
                        return deferred.promise;
                    }

                    var c = Couch(DB + "/_design/mainNav/_view/items");
                    c.get().then(angular.bind(this, function(ret) {
                        if (ret && ret.data instanceof Object && ret.data.rows && ret.data.rows instanceof Array) {
                            this.items = angular.copy(ret.data.rows);
                            deferred.resolve(this.items);
                        } else {
                            this.items = {};
                            deferred.reject("main nav items are not found")
                        }
                    }));

                    return deferred.promise;
                }
            };
        });