(function () {
    'use strict';

    angular.module('manpowerApp', ['ui.router'])
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('login',
            {
                url: '/login',
                templateUrl: '/templates/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            })
    }])
})();