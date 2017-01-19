(function () {
    'use strict';

    var app = angular.module('manpowerApp');
    app.constant('appSettings',
    {
        serverPath: 'http://localhost:55022/'
    });

    app.config(function ($httpProvider) {
        $httpProvider.defaults.transformRequest = function (data) {
            if (data === undefined) {
                return data;
            }
            return $.param(data);
        };

        //$httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
    });
})();