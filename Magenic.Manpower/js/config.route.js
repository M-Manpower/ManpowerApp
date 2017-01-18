(function () {
  'use strict';

  angular.module('manpowerApp', ['ui.router'])
  .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login',
        {
          url: '/login',
          templateUrl: '/modules/login/login.html',
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