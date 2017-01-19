(function () {
    'use strict';

    angular.module('loginApp')
    .factory('loginSvc', ['$http', '$templateCache', 'appSettings', loginSvc])

    function loginSvc($http, $templateCache, appSettings) {

        var submit = function () {
            //var value = {
            //    username: 'jonnaa@magenic.com',
            //    password: 'test123'
            //};

            $http({
                method: 'POST',
                url: appSettings.serverPath + 'api/login',
                data: { data: "test" },
                dataType: 'json',
                headers: { contentType: "application/json;"}
            });

            //$http.post(appSettings.serverPath + 'api/login', "test")
            //    .then(function (data, status, headers, config) {
            //        console.log("IN SAVE WORK - SUCCESS");
            //        console.log(status);
            //    })
            //    .catch(function () {
            //        console.log("ERROR IN SAVE WORK!");
            //    })
        }

        return {
            'submit': submit
        };
    }

})();