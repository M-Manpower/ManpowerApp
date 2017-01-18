(function () {
    'use strict';

    angular.module('manpowerApp', ['ui.router'])
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/', '/login');
        $urlRouterProvider.otherwise('/', '/user/add');

        $stateProvider
            .state('/',
            {
                url: '/'
            })
            .state('login',
            {
                url: '/login',
                templateUrl: '/modules/login/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            })
            .state('adduser',
            {
                url: '/user/add',
                templateUrl: '/modules/user/user.html',
                controller: 'UserController',
                controllerAs: 'userCtrl',
                key: 'create'
            })
    }])
})();