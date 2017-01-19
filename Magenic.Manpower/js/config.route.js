(function () {
    'use strict';

    angular.module('manpowerApp')
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/', '/login');

        $stateProvider
            .state('home',
            {
                url: '/'
            })
            .state('login',
            {
                url: '/login',
                templateUrl: '/modules/login/login-tmpl.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            })
            .state('primarySkills', {
                url: '/primaryskills',
                templateUrl: '/templates/primarySkills-tpl.html'
            })
            .state('requestForm',
            {
                url: '/requestForm',
                templateUrl: '/modules/requestForm/requestForm-tmpl.html',
                controller: 'RequestFormController',
                controllerAs: 'vm'
            })
        .state('adduser',
            {
                url: '/user/add',
                templateUrl: '/modules/user/user-tmpl.html',
                controller: 'UserController',
                controllerAs: 'userCtrl'
            })
    }])
})();