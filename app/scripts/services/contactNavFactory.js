'use strict';

angular.module("davidkwoodsApp")
        .factory("ContactNavFactory", function($q, $rootScope, Couch, DB) {
            return {
                items: null

                ,get: function() {
                    $rootScope.$emit("appendLog", "ContactNavFactor is requesting contact nav items from Couch service");

                    var deferred = $q.defer();

                    var c = Couch(DB + "/_design/contactNav/_view/items");
                    c.get().then(angular.bind(this, function(ret) {
                        $rootScope.$emit("appendLog", "ContactNavFactory has received nav items");

                        if (ret && ret.data instanceof Object && ret.data.rows && ret.data.rows instanceof Array) {
                            this.items = angular.copy(ret.data.rows);
                            deferred.resolve(this.items);
                        } else {
                            this.items = {};
                            $rootScope.$emit("appendLogError", "ERROR!! ContactNavFactory could not retrieve list of nav items");

                            deferred.reject("contact nav items are not found")
                        }
                    }));

                    return deferred.promise;
                }
            };
        });