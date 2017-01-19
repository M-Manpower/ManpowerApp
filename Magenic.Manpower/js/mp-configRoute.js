(function () {
    'use strict';

    var app = angular.module('manpowerApp');
    app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/','/login');

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
            .state('primarySkills', {
                url: '/primaryskills',
                templateUrl: '/templates/primarySkills-tpl.html'
            })
            .state('requestForm',
            {
                url: '/requestForm',
                templateUrl: '/modules/requestForm/requestForm-tmpl.html',
                controller: 'RequestFormController',
                controllerAs: 'vm'
            })
    }])

    app.config(function ($httpProvider) {
        $httpProvider.defaults.transformRequest = function (data) {
            if (data === undefined) {
                return data;
            }
            return $.param(data);
        };

        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
    });
})();