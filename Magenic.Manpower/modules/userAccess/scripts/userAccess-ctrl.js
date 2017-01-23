/// <reference path="../views/addUpdate-tmpl.html" />
(function () {
    'use strict';

    angular.module('myAccessList')
       .controller('UserAccessCtrl', UserAccessCtrl);

    UserAccessCtrl.$inject = ['$scope', 'userAccessSvc'];

    function UserAccessCtrl($scope, userAccessSvc) {
        var ua = this;

        ua.users = [{
            Id: '001',
            Name: 'Super X'
        }, {
            Id: '002',
            Name: 'Super X2'
        }];

        ua.user = { // User Person
            Id: '',
            Name: ''
        };

        ua.permissions = []; // List of permissions
        ua.permission = { // object to be submitted
            id: '',
            user: {},
            permissions: []
        };

        ua.clickMe = function () {
            $scope.$broadcast('clickMe',  '/modules/userAccess/views/addUpdate-tmpl.html');
        };
       

        userAccessSvc.getPermissions().then(function (response) {
            ua.permissions = response.data;
        });



    };
})();
