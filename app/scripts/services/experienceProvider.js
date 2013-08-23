'use strict';

angular.module("davidkwoodsApp")
       .provider("Experience", function() {
            this.dbpath = "/_design/experiences/_view/experiences";

            this.$get = function(DB, $q, Couch) {
                return {
                    groups: []
                    ,dbpath: this.dbpath

                    ,getExperience: function() {
                        var couch = Couch(DB + this.dbpath);

                        var deferred = $q.defer();
                        couch.get().then(angular.bind(this, function(ret) {
                            this.groups = this._processResults(ret.data.rows);
                            deferred.resolve(this.groups);
                        }), function(msg) {
                            deferred.reject("Experience retrieval failed! " + msg);
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
                                    ,clients: []
                                };

                                curData++;
                                while (data[curData] && data[curData].value.level == "client") {
                                    var newclient = {
                                        text: data[curData].value.text
                                        ,dates: data[curData].value.dates
                                        ,location: data[curData].value.location
                                        ,experiences: []
                                    };

                                    curData++;

                                    while (data[curData] && data[curData].value.level == "experience") {
                                        var newexperience = {
                                            text: data[curData].value.text
                                            ,experience: data[curData].value.experience
                                        };
                                        newclient.experiences.push(newexperience);

                                        curData++;
                                    }

                                    newgroup.clients.push(newclient);
                                }

                                grps.push(newgroup);
                            }
                        }

                        return grps;
                    }
                };
            };
        });