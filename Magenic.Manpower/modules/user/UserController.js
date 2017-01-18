(function () {
    'use strict';
    angular.module('userModule')
        .controller('UserController', function () {
        this.user = {};
        this.message = "FROM CONTROLLER";
        this.mode = "TEST";
        this.addUser = function () {
        };
    });
});
