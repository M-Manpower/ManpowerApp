(function () {
    'use strict';

    angular.module('manpowerApp')
    .run(['routehelper', function (routehelper) {
        routehelper.configureRoutes(getRoutes());
    }]);

    function getRoutes() {
        return [{
            url: '/dashboard',
            config: {
                templateUrl: '',
                controller: '',
                controllerAs: 'vm',
                title: ''
            }
        }]
    };
})();