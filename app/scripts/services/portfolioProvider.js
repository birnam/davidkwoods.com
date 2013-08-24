'use strict';

angular.module("davidkwoodsApp")
       .provider("Portfolio", function() {
            this.dbpath = "/_design/portfolio/_view/portfolioItems";

            this.$get = function(DB, $q, $rootScope, Couch) {
                return {
                    portfolio: []
                    ,dbpath: this.dbpath

                    ,getPortfolio: function() {
                        $rootScope.$emit("appendLog", "PortfolioProvider is requesting data from Couch service");

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
                            $rootScope.$emit("appendLogError", "ERROR! PortfoioProvider has failed to receive data from Couch service");

                            deferred.reject("Skills retrieval failed! " + msg);
                        });

                        return deferred.promise;
                    }
                };
            };
        });