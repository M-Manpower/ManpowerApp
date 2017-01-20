(function () {
    'use strict';

    angular
        .module('loginApp')
        .factory('LoginContext', LoginContext)

    LoginContext.$inject = ['xhr', 'appSettings'];

    function LoginContext(xhr, appSettings) {
       
        return {
            GetByUsername: GetByUsername,
            RegisterUser: RegisterUser
        };

        function GetByUsername(username) {
            var url = appSettings.serverPath + 'api/login/';

            return xhr.get(url, username);
        }

        function RegisterUser(info) {
            var url = appSettings.serverPath + 'api/login/';

            return xhr.post(url, info);
        }
    }

})();