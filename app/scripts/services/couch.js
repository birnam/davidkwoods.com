'use strict';

angular.module('davidkwoodsApp.services', [ 'ng' ])
    .factory("Couch", function(/*$resource*/$http) {
            function CouchFactory(URL, Params) {
                var url = URL;
                var totalRows = 0;
                var offset = 0;
                var rows = [];
                var params = Params || {};

                function Couch() {
                }

                Couch.query = function(success) {
                    params.callback = "JSON_CALLBACK";
                    params.jsonp = "JSON_CALLBACK";
                    $http.jsonp(url, { params: params }).success(function(ret) {
                        if (ret instanceof Object && ret.rows && ret.rows instanceof Array) {
                            totalRows = ret.total_rows || ret.rows.length;
                            offset = ret.offset || 0;
                            rows = angular.copy(ret.rows);
                            if (success && typeof(success) == "function") {
                                success(rows);
                            }
                        } else if (ret instanceof Array) {
                            if (success && typeof(success) == "function") {
                                success(ret);
                            }
                        }
                    });
                }

                return Couch;
            }

            return CouchFactory;
        });