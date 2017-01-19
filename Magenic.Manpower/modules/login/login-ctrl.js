(function () {
    'use strict';

    angular.module('loginApp')
    .controller('LoginController', ['$scope', 'loginSvc', LoginController])
        
    function LoginController($scope, loginSvc) {

        this.title = "Manpower Request App";
        this.submit = function () {
            loginSvc.submit();
        }
    }
})();