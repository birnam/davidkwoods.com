'use strict';

angular.module('davidkwoodsApp')
        .value('MainNavMock',
        {"total_rows":6,"offset":0,"rows":[
        {"id":"nav home","key":[1,"Home"],"value":{"_id":"nav home","_rev":"3-b3551f15f5b638b4cde7d18d8acf3aa3","text":"a","class":"home","url":"/","sort":1,"type":"mainNav"}},
        {"id":"nav about","key":[2,"Who Am I?"],"value":{"_id":"nav about","_rev":"3-4b1b7060eb4162c2000b2b15e859f015","sort":2,"text":"Who Am I?","url":"/about","class":null,"type":"mainNav"}},
        {"id":"nav skills","key":[3,"Skills"],"value":{"_id":"nav skills","_rev":"3-275abb5ae3289b7346d056d75e86a9ba","sort":3,"text":"Skills","url":"/skills","class":null,"type":"mainNav"}},
        {"id":"nav experience","key":[4,"Experience"],"value":{"_id":"nav experience","_rev":"3-11a36a0c438dfd47b22341f71c6aafbb","sort":4,"class":null,"text":"Experience","url":"/experience","type":"mainNav"}},
        {"id":"nav portfolio","key":[5,"Work"],"value":{"_id":"nav portfolio","_rev":"2-90627505863d0f36c0b33cd427af49dd","text":"Work","url":"/portfolio","class":null,"sort":5,"type":"mainNav"}},
        {"id":"nav contact","key":[6,"Contact"],"value":{"_id":"nav contact","_rev":"2-776b93e8a5c68fbc6d00d93db64a2898","class":null,"text":"Contact","url":"/contact","sort":6,"type":"mainNav"}}
        ]}
);