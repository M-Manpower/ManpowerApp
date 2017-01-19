
(function () {
    angular.module('manpowerApp')
    .directive('myCustomer', function () {
        return {
            restrict: 'E',
            scope: {
                userList: '=info'
            },
            templateUrl: '/modules/userAccess/views/userAccessList-tmpl.html'
        };
    });
});
