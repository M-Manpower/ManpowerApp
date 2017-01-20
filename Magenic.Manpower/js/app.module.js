(function () {
    'use strict';

    angular.module('manpowerApp',
        ['loginApp',
        'requestFormApp',
        'ui.router',
        'ui.bootstrap'
        ])
        .filter('startFrom', function () {
            return function (input, start) {
                if (input) {
                    start = +start;
                    return input.slice(start);
                }
                return [];
            };
        })
        .constant('_', window._);
})();