(function () {
    'use strict';

    angular.module('techDetailsApp').controller('TechDetailsController', TechDetailsController);

    TechDetailsController.$inject = ['$scope', 'TechDetailsService'];

    function TechDetailsController($scope, TechDetailsService) {
        var sample = this;

        function saveTechDetail(tech, techForm) {
            var status = '';
            // check if form is valid
            if (techForm.$valid) {
                // call service to check if name already exists
                if (TechDetailsService.verifyTech(tech.name)) {
                    // call service to save values
                    TechDetailsService.saveTech(tech);
                }
                // show success/error result to user
                alert('Successfully ' + status + ' Technology entry!');
            }
        }

        function cancelTechDetail() {
            // redirect to tech list
            window.location.href('');
        }

        // get id from url
        var id;
        if (id != undefined) {
            // call service to get tech details 
            var techDetail = TechDetailsService.getTech(id);
            if (techDetail != null) {
                this.tech = techDetail;
            }
            this.process = "Edit";
        } else {
            this.process = "Create";
        }

        this.saveTech = saveTechDetail;
        this.cancelTech = cancelTechDetail;

        return sample;
    }
})();