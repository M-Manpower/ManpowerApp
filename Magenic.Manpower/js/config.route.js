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
                    })
                    .state('requestForm',
                    {
                        url: '/requestForm',
                        templateUrl: '/modules/requestForm/requestForm-tmpl.html',
                        controller: 'RequestFormController',
                        controllerAs: 'vm'
                    })
                    .state('primarySkills', {
                        url: '/primaryskills',
                        templateUrl: '/templates/primarySkills-tpl.html'
                    })

                    // Roles and Permission (a.k.a. user access)
                    .state('userAccess',
                    {
                        url: '/userAccess',
                        templateUrl: '/modules/userAccess/userAccess-tmpl.html',
                        controller: 'UserAccessCtrl',
                        controllerAs: 'vm'
                        //views: {
                            
                        //    'main': {
                               
                        //    }
                        //}
                        
                    });
            }
        ]);
})();