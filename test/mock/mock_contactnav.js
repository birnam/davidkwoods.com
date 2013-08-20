'use strict';

angular.module('davidkwoodsApp')
        .value('ContactNavMock',
        {"total_rows":5,"offset":0,"rows":[
        {"id":"contact email","key":[1,"Email"],"value":{"_id":"contact email","_rev":"3-681a7e55f3680622de2e9c5a0d960ccd","type":"contactNav","url":"mailto:david@davidkwoods.com","text":"z","title":"Email","target":"_blank","sort":1}},
        {"id":"contact facebook","key":[2,"Facebook"],"value":{"_id":"contact facebook","_rev":"4-5bceb3d91bd3b31dff36f6319efa2cd8","type":"contactNav","text":"F","title":"Facebook","target":"_blank","url":"https://www.facebook.com/truegeek","sort":2}},
        {"id":"contact twitter","key":[3,"Twitter"],"value":{"_id":"contact twitter","_rev":"2-9195fdd4e95b8fc167a311a59e609fd5","type":"contactNav","url":"https://twitter.com/david_woods","title":"Twitter","text":"J","target":"_blank","sort":3}},
        {"id":"contact LinkedIn","key":[4,"LinkedIn"],"value":{"_id":"contact LinkedIn","_rev":"2-2a21fee9c3c9784cc7d9f2e9be042c01","url":"https://www.linkedin.com/in/davidkwoods/","type":"contactNav","text":3,"title":"LinkedIn","target":"_blank","sort":4}},
        {"id":"contact resumé","key":[5,"Resumé"],"value":{"_id":"contact resumé","_rev":"4-4cb7ed6bb965a459723736e823f9bdda","type":"contactNav","target":"_blank","url":"https://dl.dropboxusercontent.com/u/5020439/DavidWoodsresume.pdf","text":"?","title":"Resumé","sort":5}}
        ]}
);