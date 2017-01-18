﻿(function () {
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
            .state('requestForm',
            {
                url: '/requestForm',
                templateUrl: '/modules/requestForm/requestForm-tmpl.html',
                controller: 'RequestFormController',
                controllerAs: 'vm'
            })
            .state('techDetails',
            {
                url: '/techDetails/:techId',
                templateUrl: '/modules/technologies/techDetails-tmpl.html',
                controller: 'TechDetailsController',
                controllerAs: 'tech'
            })
    }])
})();