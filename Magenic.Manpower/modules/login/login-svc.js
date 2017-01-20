(function () {
    'use strict';

    angular
        .module('loginApp')
        .factory('LoginService', LoginService)

    LoginService.$inject = ['$timeout', '$http', 'LoginContext'];

    function LoginService($timeout, $http, LoginContext) {
        return {
            Login: Login,
            Register: RegisterUser
        };

        function Login(username, password) {
            $timeout(function () {
                LoginContext.GetByUsername(username)
                .then(function () { });
            });
        }

        function RegisterUser(info)
        {
            LoginContext.RegisterUser(info);
        }

    }

})();