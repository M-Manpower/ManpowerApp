(function () {
    'use strict';

    angular.module('manpowerApp', ['ui.router'])
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/','/login');

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
            .state('requestForm',
            {
                url: '/requestForm',
                templateUrl: '/modules/requestForm/requestForm-tmp.html',
                controller: 'RequestFormController',
                controllerAs: 'vm'
            })
    }])
})();