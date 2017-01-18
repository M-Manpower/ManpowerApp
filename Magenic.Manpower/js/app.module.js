(function () {
    'use strict';

    angular.module('manpowerApp',
        ['loginApp',
        'requestFormApp',
        'ui.router'
        ]).constant('_', window._);
})();