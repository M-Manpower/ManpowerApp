(function () {
    'use strict';

    angular.module('manpowerApp')
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/', '/login', '/user/add');

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
                templateUrl: '/modules/user/user-tmpl.html',
                controller: 'UserController',
                controllerAs: 'userCtrl'
            })
    }])
})();