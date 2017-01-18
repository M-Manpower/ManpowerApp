(function () {
    'use strict';

    angular.module('techDetailsApp').controller('TechDetailsController', TechDetailsController);

    TechDetailsController.$inject = ['$scope'];

    function TechDetailsController($scope) {
        function saveTechDetail(tech, techForm) {
            var status = '';
            // check if form is valid
            if (techForm.$valid) {
                // call service to save values
                //TechDetailsService.saveTech();
                // show success/error result to user
                alert('Successfully ' + status + ' Technology entry!');
            }
        }

        function cancelTechDetail() {
            // redirect to tech list
            window.location.href('');
        }

        //if (id != null) {
        //var techDetail = TechDetailsService.getTech(id);
        //if (techDetail != null) {
        //    $scope.tech = techDetail;
        //}
        this.process = "Edit";
        //}
    }
})();