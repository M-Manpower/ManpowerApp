(function () {
    'use strict';

    angular.module('rolesModule')
        .factory('rolesSvc', function ($q) {

            var getRoles = function () {
                //temporary for sample data population
                return $q(function (resolve, reject) {
                    resolve({
                        data: [{
                            id: '0',
                            name: 'Administrator',
                            description: 'System Administrator',
                            active: true
                        }, {
                            id: '1',
                            name: 'Consulting Manager',
                            description: 'A Consulting Manager.',
                            active: true
                        }, {
                            id: '2',
                            name: 'Human Resource',
                            description: 'A Human Resource officer.',
                            active: true
                        }, {
                            id: '3',
                            name: 'Custom Resource',
                            description: 'Custom Role',
                            active: false
                        }
                        ]
                    });
                });
            };

            return {
                'get': getRoles
            };
        });
})();