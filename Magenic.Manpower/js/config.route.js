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
            .state('techlist',
            {
                url: '/techlist',
                templateUrl: '/modules/techlist/techlist-tmpl.html',
                controller: 'techlistCtrl',
                controllerAs: 'tl'
            })
            
    }])
})();