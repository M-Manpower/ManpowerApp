(function () {
    'use strict';

    angular.module('manpowerApp')
        .controller('UserAccessCtrl',

            function(userAccessSvc) {
                this.Permissions = [];

                userAccessSvc.get()
                    .then(function(response) {
                        this.Permissions[response.data];
                    }.bind(this));
            });
})();