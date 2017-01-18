(function () {
  'use strict';

    angular.module('manpowerApp')
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/','/login','/roles');

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
            .state('roles',
              {
                url: '/roles',
                templateUrl: '/modules/role/roles-tmpl.html',
                controller: 'rolesCtrl',
                controllerAs: 'vm'
              })
    }])
})();