(function () {
    'use strict';

    angular
        .module('loginApp')
        .controller('LoginController', LoginController)

    LoginController.$inject = ['$scope', 'LoginService'];

    function LoginController($scope, LoginService) {
        var vm = this;
        vm.title = "Manpower Request App";
        vm.login = login;
        vm.register = register;

        function login() {
            vm.dataLoading = true;
            LoginService.Login(vm.username, vm.password);
        }

        function register() {
            var info = {
                'username': 'test@test.com',
                'password': 'pass@word'
            }
            LoginService.Register(info);
        }
    }
})();