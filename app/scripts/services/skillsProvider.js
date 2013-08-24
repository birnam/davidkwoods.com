'use strict';

angular.module("davidkwoodsApp")
       .provider("Skills", function() {
            this.dbpath = "/_design/skills/_view/skills";

            this.$get = function(DB, $q, $rootScope, Couch) {
                return {
                    groups: []
                    ,dbpath: this.dbpath

                    ,getSkills: function() {
                        $rootScope.$emit("appendLog", "SkillsProvider is retrieving skills from the Couch service");

                        var couch = Couch(DB + this.dbpath);

                        var deferred = $q.defer();
                        couch.get().then(angular.bind(this, function(ret) {
                            this.groups = this._processResults(ret.data.rows);
                            deferred.resolve(this.groups);
                        }), function(msg) {
                            $rootScope.$emit("appendLogError", "ERROR!! SkillsProvider data retrieval has failed");

                            deferred.reject("Skills retrieval failed! " + msg);
                        });

                        return deferred.promise;
                    }

                    ,_processResults: function(data) {
                        $rootScope.$emit("appendLog", "SkillsProvider is collating received data");

                        var grps = [];
                        var curData = 0;

                        while (data[curData]) {
                            while (data[curData] && data[curData].value.level == "group") {
                                var newgroup = {
                                    text: data[curData].value.text
                                    ,sections: []
                                };

                                curData++;
                                while (data[curData] && data[curData].value.level == "section") {
                                    var newsection = {
                                        text: data[curData].value.text
                                        ,skills: []
                                    };

                                    curData++;

                                    while (data[curData] && data[curData].value.level == "skill") {
                                        var years = [];
                                        var halfyears = [];
                                        var exposures = [];

                                        var yset = this._processYears(data[curData].value.years);
                                        for (var y=0; y<yset[0]; y++) {
                                            years.push(1);
                                        }
                                        for (var hy=0; hy<yset[1]; hy++) {
                                            halfyears.push(1);
                                        }
                                        for (var ex=0; ex<yset[2]; ex++) {
                                            exposures.push(1);
                                        }

                                        var newskill = {
                                            text: data[curData].value.text
                                            ,years: years
                                            ,halfyears: halfyears
                                            ,exposures: exposures
                                        };
                                        newsection.skills.push(newskill);

                                        curData++;
                                    }

                                    newgroup.sections.push(newsection);
                                }

                                grps.push(newgroup);
                            }
                        }

                        return grps;
                    }

                    ,_processYears: function(y) {
                        var numYears = Math.floor(y);
                        var numHalfYears = Math.floor((y - numYears) / 0.5);
                        var numExposures = Math.floor((y - numYears - (numHalfYears * 0.5)) / 0.1);

                        return [numYears, numHalfYears, numExposures];
                    }
                };
            };
        });