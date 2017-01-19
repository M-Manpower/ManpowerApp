(function () {
    'use strict';

    angular
        .module('loginApp')
        .factory('LoginService', LoginService)

    LoginService.$inject = ['$timeout','$http', 'appSettings'];

    function LoginService($timeout, $http, appSettings) {
        var service = {};
        service.Login = Login;
        return service;

        function Login(username, password) {
            $timeout(function () {
                GetByUsername(username)
                .then(function () { });
            });
        }

        //api
        function GetByUsername(username) {
            return $http.get(appSettings.serverPath + 'api/login/' + username);
        }
    }

})();