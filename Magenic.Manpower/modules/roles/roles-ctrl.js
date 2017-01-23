(function () {
    'use strict';

    angular
        .module('rolesModule')
        .controller('rolesCtrl', rolesCtrl)

    rolesCtrl.$inject = ['rolesSvc'];

    function rolesCtrl(rolesSvc) {
        this.nameFilter = null;
    }

})();