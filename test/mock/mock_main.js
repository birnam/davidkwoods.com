'use strict';

angular.module('davidkwoodsApp')
        .value('OnesMock',
        {"total_rows": 3, "offset": 0, "rows": [
            {
                "id": "1",
                "key": "1",
                "value": 1
            },
            {
                "id": "2",
                "key": "2",
                "value": "i"
            },
            {
                "id": "3",
                "key": "3",
                "value": "a"
            }
        ]})
        .value('OnesMock_Key2',
        {"total_rows": 3, "offset": 0, "rows": [
            {
                "id": "2",
                "key": "2",
                "value": "i"
            }
        ]}
);