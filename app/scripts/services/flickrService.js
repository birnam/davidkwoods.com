'use strict';

angular.module('davidkwoodsApp.services')
    .service("Flickr", function($http, $cacheFactory, $q, FlickrAPIKey, FlickrUserId, $rootScope) {

            this.serverDeferred = null;
            this.photosets = [];

            this.$flickrCache = $cacheFactory("FLICKR");
            if (this.$flickrCache) {
                this.$flickrCache.removeAll();
            }

            function buildCacheURL(url, params) {
                var cacheparams = [];
                for (var p in params) {
                    cacheparams.push(p + "=" + params[p]);
                }
                cacheparams.sort();

                var cacheurl = url;
                if (cacheparams.length > 0) {
                    cacheurl += "?" + cacheparams.join("&");
                }
                return cacheurl;
            }

            this.getAllPhotoSets = function() {
                $rootScope.$emit("appendLog", "Flickr service is retrieving all photo sets for davidkwoods");

                var url = "http://api.flickr.com/services/rest/?";
                var params = {
                    method: "flickr.photosets.getList"
                    ,format: "json"
                    ,api_key: FlickrAPIKey
                    ,user_id: FlickrUserId
                    ,jsoncallback: "JSON_CALLBACK"
                };

                var cached = this.$flickrCache.get(buildCacheURL(url, params));
                if (cached) {
                    // not only already requested, but already HAVE data!!
                    // go ahead and return it
                    var defr = $q.defer();
                    defr.resolve(cached);
                    $rootScope.$emit("appendLog", "Flickr service already has photo sets in cache, server contact skipped");

                    return defr.promise;
                }


                if (this.serverDeferred) {
                    // already requesting data! just return deferred
                    $rootScope.$emit("appendLog", "Flickr service is already requesting photo sets, server contact skipped");

                    return this.serverDeferred.promise;
                }

                this.serverDeferred = $q.defer();

                $http.jsonp(url, { params: params }).success(angular.bind(this, function(ret) {
                    $rootScope.$emit("appendLog", "Flickr service has received photosets from Flickr API");

                    this.photosets = ret.photosets.photoset;
                    this.$flickrCache.put(buildCacheURL(url, params), ret);
                    this.serverDeferred.resolve(this.photosets);
                })).error(angular.bind(this, function() {
                    $rootScope.$emit("appendLogError", "ERROR!! Flickr service API call has failed to retrieve all photo sets");

                    this.serverDeferred.reject("Could not access photosets on flickr");
                }));

                return this.serverDeferred.promise;
            }

            this.getPrimaryPhoto = function(setid) {
                var deferred = $q.defer();

                $rootScope.$emit("appendLog", "Flickr service is looking up primary photo for set #" + setid);

                this.getAllPhotoSets().then(function(ret) {
                    for (var i=0; i<ret.length; i++) {
                        if (ret[i].id == setid) {
                            var url = "http://farm" + ret[i].farm + ".staticflickr.com/" +
                                      ret[i].server + "/" + ret[i].primary + "_" +
                                      ret[i].secret + "_n.jpg";

                            $rootScope.$emit("appendLog", "Flickr service has found photos for set #" + setid);
                            deferred.resolve(url);
                            break;
                        }
                    }
//                    $rootScope.$emit("appendLogError", "ERROR!! Flickr service attempted to retrieve a primary photo for an invalid set #" + setid);

                    deferred.reject("Set not found in user's photosets");
                }, function(msg) {
                    $rootScope.$emit("appendLogError", "ERROR!! Flickr service was unable to access photoset list for set #" + setid);

                    deferred.reject(msg);
                });

                return deferred.promise;
            }

            this.getPhotoSet = function(setid) {
                $rootScope.$emit("appendLog", "Flickr service is retrieving the list all photos in set #" + setid);

                var url = "http://api.flickr.com/services/rest/";
                var params = {
                    method: "flickr.photosets.getPhotos"
                    ,format: "json"
                    ,api_key: FlickrAPIKey
                    ,photoset_id: setid
                    ,extras: "description"
                    ,jsoncallback: "JSON_CALLBACK"
                };

                var deferred = $q.defer();

                var cached = this.$flickrCache.get(buildCacheURL(url, params));
                if (cached) {
                    // not only already requested this set, but already HAVE data!!
                    // go ahead and return it
                    $rootScope.$emit("appendLog", "Flickr service has found photo list for set #" + setid + " in cache, additional server request avoided!");

                    deferred.resolve(cached);
                    if (!$rootScope.$$phase) {
                        $rootScope.$apply();
                    }
                } else {
                    $http.jsonp(url, { params: params }).success(angular.bind(this, function(ret) {
                        $rootScope.$emit("appendLog", "Flickr service has received photo list for set #" + setid + " from Flickr API");

                        var pset = angular.copy(ret.photoset);
                        this.$flickrCache.put(buildCacheURL(url, params), pset);
                        deferred.resolve(pset);
                    })).error(angular.bind(this, function() {
                        $rootScope.$emit("appendLogError", "ERROR!! Flickr service could not retrieve list of photos for set #" + setid);

                        deferred.reject("Could not access photoset " + setid + " on flickr");
                    }));
                }

                return deferred.promise;
            }
        });