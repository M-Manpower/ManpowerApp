(function () {
    'use strict';

    angular.module('manpowerApp', ['ui.router'])
        .config([
            '$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
                $urlRouterProvider.otherwise('/', '/login');

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
                    });

                $stateProvider.state('roles',
                    {
                        url: '/roles',
                        templateUrl: '/modules/roles/roles.html',
                        controller: 'RolesController'
                    });
            }
        ]);
})();