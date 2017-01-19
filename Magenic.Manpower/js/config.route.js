(function () {
    'use strict';

    angular.module('manpowerApp')
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/', '/login', '/roles');

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
})();