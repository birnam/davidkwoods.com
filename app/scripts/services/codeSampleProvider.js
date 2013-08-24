'use strict';

angular.module("davidkwoodsApp")
       .provider("CodeSamples", function() {
            this.dbpath = "/_design/codesamples/_view/projects";

            this.$get = function(DB, $q, Couch) {
                return {
                    groups: []
                    ,dbpath: this.dbpath

                    ,getCodeSamples: function() {
                        var couch = Couch(DB + this.dbpath);

                        var deferred = $q.defer();
                        couch.get().then(angular.bind(this, function(ret) {
                            this.groups = this._processResults(ret.data.rows);
                            deferred.resolve(this.groups);
                        }), function(msg) {
                            deferred.reject("Code Sample retrieval failed! " + msg);
                        });

                        return deferred.promise;
                    }

                    ,_processResults: function(data) {
                        var grps = [];
                        var curData = 0;

                        while (data[curData]) {
                            while (data[curData] && data[curData].value.level == "group") {
                                var newgroup = {
                                    text: data[curData].value.text
                                    ,projects: []
                                };

                                curData++;
                                while (data[curData] && data[curData].value.level == "project") {
                                    var newproject = {
                                        text: data[curData].value.text
                                        ,title: data[curData].value.title
                                        ,description: data[curData].value.description
                                        ,code: data[curData].value.code
                                        ,view: data[curData].value.view
                                    };

                                    curData++;

                                    newgroup.projects.push(newproject);
                                }

                                grps.push(newgroup);
                            }
                        }

                        return grps;
                    }
                };
            };
        });