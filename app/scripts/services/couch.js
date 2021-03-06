'use strict';

angular.module('davidkwoodsApp.services')
    .factory("Couch", function($http, $cacheFactory, $q, $rootScope) {
            // since the caching is just for show and the site won't get
            // enough traffic to really need it, I am deleting all of
            // the Couch cache whenever the page is fully refreshed

            var $couchCache = $cacheFactory("COUCHDB");
            if ($couchCache) {
                $couchCache.removeAll();
            }

            function CouchFactory(URL, Params) {
                var url = URL;
                var totalRows = 0;
                var offset = 0;
                var rows = [];
                var params = Params || {};

                function Couch() { }

                Couch.get = function() {
                    var cacheparams = [];
                    for (var p in params) {
                        cacheparams.push(p + "=" + params[p]);
                    }
                    cacheparams.sort();

                    params.callback = "JSON_CALLBACK";
                    params.jsonp = "JSON_CALLBACK";

                    var deferred = $q.defer();

                    var cacheurl = url;
                    if (cacheparams.length > 0) {
                        cacheurl += "?" + cacheparams.join("&");
                    }

                    var cached = $couchCache.get(cacheurl);
                    if (cached) {
                        $rootScope.$emit("appendLog", "CouchDB request avoided because content is cached! " + cacheurl);
                        deferred.resolve(cached);
                    } else {
                        $rootScope.$emit("appendLog", "Pull data from CouchDB source " + cacheurl);

                        $http.jsonp(url, { params: params }).then(function(ret) {
                            $couchCache.put(cacheurl, ret);
                            deferred.resolve(ret);
                        }, function() {
                            // error Doctor Alban!!
                            $rootScope.$emit("appendLogError", "ERROR!! CouchDB could not be accessed");

                            deferred.reject("Could not access CouchDB");
                        });
                    }

                    return deferred.promise;
                }

                return Couch;
            }

            return CouchFactory;
        });