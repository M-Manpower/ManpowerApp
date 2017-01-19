(function () {
    'use strict';

    angular.module('manpowerApp',
        ['loginApp',
        'requestFormApp',
        'ui.router',
        'ui.bootstrap'
        ]).constant('_', window._);
})();