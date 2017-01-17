(function () {
    'use strict';
    angular.module('manpowerApp')
        .controller('rolesCtrl', function (rolesSvc) {
            this.nameFilter = null;
            this.list = [];

            rolesSvc.get().then(function (response) {
                this.list = response.data;
            }.bind(this));//need to bind the function because this is a callback
        })
})();