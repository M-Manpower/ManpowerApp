(function () {
    'use strict';

    angular.module('manpowerApp')
    .controller('TechController', ['$scope', function TechController($scope) {
        $scope.saveTech = function (tech, techForm) {
            var status = '';
            // check if form is valid
            if (techForm.$valid) {
                // call service to save values

                // show success/error result to user
                alert('Successfully ' + status + ' Technology entry!');
            }
        }

        $scope.cancelTech = function () {
            // redirect to tech list
            window.location.href('');
        }
    }]);
});