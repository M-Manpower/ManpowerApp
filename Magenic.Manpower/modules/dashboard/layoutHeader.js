(function () {
    'use strict';
    angular
        .module('manpowerApp')
        .component('layoutHeader', {
            templateUrl: '/modules/dashboard/header.html',
            bindings: {},
            controller: Controller
        });

    Controller.$inject = [];
    function Controller() {
        var ctrl = this;

        initialize();
        function initialize() {

        }

    }
}());