'use strict';

angular.module("davidkwoodsApp")
       .provider("Experience", function() {
            this.dbpath = "/_design/experiences/_view/experiences";

            this.$get = function(DB, $q, $rootScope, Couch) {
                return {
                    groups: []
                    ,dbpath: this.dbpath

                    ,getExperience: function() {
                        $rootScope.$emit("appendLog", "ExperienceProvider is requesting experience list from Couch service");

                        var couch = Couch(DB + this.dbpath);

                        var deferred = $q.defer();
                        couch.get().then(angular.bind(this, function(ret) {
                            $rootScope.$emit("appendLog", "ExperienceProvider has received list of experiences from Couch service");

                            this.groups = this._processResults(ret.data.rows);
                            deferred.resolve(this.groups);
                        }), function(msg) {
                            $rootScope.$emit("appendLogError", "ERROR!! ExperienceProvider failed to retrieve list of experiences");

                            deferred.reject("Experience retrieval failed! " + msg);
                        });

                        return deferred.promise;
                    }

                    ,_processResults: function(data) {
                        $rootScope.$emit("appendLog", "ExperienceProvider is now collating list of experiences");

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