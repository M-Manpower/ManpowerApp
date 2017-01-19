(function () {
    'use strict';

    angular.module('rolesModule')
        .controller('rolesCtrl', function (rolesSvc) {
            this.nameFilter = null;
            this.list = [];

            rolesSvc.get().then(function (response) {
                this.list = response.data;
            }.bind(this));
        })
})();