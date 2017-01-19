//(function () {
//    'use strict';

//    angular.module('userModule')
//        .controller('UserController', ['$scope', function ($scope) {
//            this.mode = "TEST";
//        //this.user = {};
//        //this.message = "FROM CONTROLLER";
//        //this.mode = "TEST";
//        //this.addUser = function () {
//        //};
//    }]);
//});

(function () {
    'use strict';

    angular.module('userModule')
    .controller('UserController', ['$scope', function ($scope, data) {
        this.mode = "TEST";
        this.key = data;
        alert('key: ' + this.key);
    }]);
})();