(function () {
    'use strict';
    angular.module('manpowerApp')
        .controller('UserAccessCtrl',
            function (userAccessSvc) {
                var ua = this;

                ua.users = [];

                ua.user = { // User Person
                    Id: '',
                    Name:''
                };

                ua.permissions = []; // List of permissions
                ua.permission = { // object to be submitted
                    id: '',
                    user: {},
                    permissions: []
                };

                userAccessSvc.getPermissions().then(function (response) {
                    ua.permissions = response.data;
                });
            });
})();
