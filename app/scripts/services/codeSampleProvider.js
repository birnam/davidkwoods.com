'use strict';

angular.module("davidkwoodsApp")
       .provider("CodeSamples", function() {
            this.dbpath = "/_design/codesamples/_view/projects";

            this.$get = function(DB, $q, $rootScope, Couch) {
                return {
                    groups: []
                    ,dbpath: this.dbpath

                    ,getCodeSamples: function() {
                        $rootScope.$emit("appendLog", "CodeSamplesProvider is retrieving list of code samples from Couch service");

                        var couch = Couch(DB + this.dbpath);

                        var deferred = $q.defer();
                        couch.get().then(angular.bind(this, function(ret) {
                            $rootScope.$emit("appendLog", "CodeSampleFactory has received code samples");

                            this.groups = this._processResults(ret.data.rows);
                            deferred.resolve(this.groups);
                        }), function(msg) {
                            $rootScope.$emit("appendLogError", "ERROR!! CodeSampleFactory has not received any code samples");

                            deferred.reject("Code Sample retrieval failed! " + msg);
                        });

                        return deferred.promise;
                    }

                    ,_processResults: function(data) {
                        $rootScope.$emit("appendLog", "CodeSampleFactory is collating results");

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