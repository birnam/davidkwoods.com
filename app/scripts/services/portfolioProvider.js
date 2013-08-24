'use strict';

angular.module("davidkwoodsApp")
       .provider("Portfolio", function() {
            this.dbpath = "/_design/portfolio/_view/portfolioItems";

            this.$get = function(DB, $q, Couch) {
                return {
                    portfolio: []
                    ,dbpath: this.dbpath

                    ,getPortfolio: function() {
                        var couch = Couch(DB + this.dbpath);

                        var deferred = $q.defer();
                        couch.get().then(angular.bind(this, function(ret) {
                            var p = [];
                            for (var i=0; i<ret.data.rows.length; i++) {
                                p.push(ret.data.rows[i].value);
                            }
                            this.portfolio = p;
                            deferred.resolve(this.portfolio);
                        }), function(msg) {
                            deferred.reject("Skills retrieval failed! " + msg);
                        });

                        return deferred.promise;
                    }
                };
            };
        });