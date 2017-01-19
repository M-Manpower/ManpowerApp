(function () {
    'use strict';
    angular.module('manpowerApp')
        .controller('UserAccessCtrl',
            function (userAccessSvc) {
                var ua = this;
                ua.permissions = [];

                userAccessSvc.getPermissions().then(function (response) {
                    ua.permissions = response.data;
                });
            });
})();
