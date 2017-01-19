(function () {
    "use strict";

    angular
        .module('requestFormApp')
        .controller('RequestFormController', RequestFormController);

    RequestFormController.$inject = ['$scope'];

    function RequestFormController($scope) {
        var vm = this;
        vm.submit = submit;
        init();

        function init() {
            getRegions();
            getLevels();
            getPrimarySkills();
            getPrimaryTechnologies();
            getReasonsOfRequest();
        }

        function getRegions() {
            vm.regions = [{ Name: "Manila" }, { Name: "Minneapolis" }, { Name: "Boston" }];
        }

        function getLevels() {
            vm.levels = [{ Name: "Junior" }, { Name: "Senior" }, { Name: "Team Lead" }];
        }

        function getPrimarySkills() {
            vm.primarySkills = [{ Name: ".NET" }, { Name: "IOS" }, { Name: "Android" }];

        }

        function getPrimaryTechnologies() {
            vm.primaryTechnologies = [{ Name: "AngularJS" }, { Name: "jQuery" }];
        }

        function getReasonsOfRequest() {
            vm.reasonsOfRequest = [{ Name: "Replacement" }, { Name: "Additional resource" }, { Name: "Change request" }];
        }

        function submit() {
        }
    }
}());