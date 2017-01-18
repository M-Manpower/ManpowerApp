(function () {
    'use strict';

    angular.module('manpowerApp')
        .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

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
                    });

                // Roles and Permission (a.k.a. user access)
                $stateProvider.state('useraccess',
                    {
                        url: '/useraccess',
                        templateUrl: '/modules/userAccess/userAccess-tmpl.html',
                        controller: 'UserAccessCtrl',
                        controllerAs: 'vm'
                    });
            }
        ]);
})();