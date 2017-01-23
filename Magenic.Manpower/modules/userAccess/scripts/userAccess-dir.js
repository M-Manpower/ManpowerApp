(function() {

    angular.module('myAccessList')
        .directive('myAccess', myAccess);


    function myAccess() {
        var aa = '/modules/userAccess/views/userAccessList-tmpl.html';
        return {
            //restrict: 'EA',
            //scope: {
            //    //userList: '='
            //    aa: '='
            //},
            templateUrl: aa,

            link:function(scope, element, attrs) {
                scope.$on('clickMe', function (a, b) {
                    scope.getContentUrl = function () {
                        return '/modules/userAccess/views/addUpdate-tmpl.html';
                    }
                });
            },
            controller: 'UserAccessCtrl'
        };
    };

    
})();