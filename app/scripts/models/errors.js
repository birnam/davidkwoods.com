angular.module("davidkwoodsApp")
       .value("ErrorsModel", {
                content_not_found: {
                    title: "404 Page Not Found"
                    ,content: "<p>Don't worry, it's not your fault. Everyone has performance issues at some point.</p>" +
                              "<p>Currently, CouchDB is the one having performance issues. No sweat.</p>"
                }
            }
       );