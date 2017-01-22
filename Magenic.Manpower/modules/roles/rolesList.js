(function () {
    'use strict';

    angular
    .module('rolesModule')
    .component('rolesList', {
        bindings: {
            list: '<'
        },
        templateUrl: 'modules/roles/rolesList.html',
        controller: rolesListCtrl
    });

    rolesListCtrl.$inject = ['rolesSvc'];

    function rolesListCtrl(rolesSvc) {
        this.$onInit = function () {
            rolesSvc.get().then(function (response) {
                this.list = response.data;
            }.bind(this));
        };

        this.$onChanges = function (changes) {
            //this.init();
            var s = '';
        };

        this.view = function (id) {
            alert('viewing -> ' + id);
        };

        this.toggleActive = function (id, isActive) {
            var item = findItem(id);
            item.active = !isActive;
        };

        var findItem = function (id) {
            return _.find(this.list, function (role) { return role.id == id; });
        }.bind(this);
    }
})();