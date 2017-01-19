(function () {
    'use strict';

    angular.module('techDetailsApp').factory('TechDetailsService', TechDetailsService);

    //TechDetailsService.$inject = [];

    function TechDetailsService() {
        var service = {
            getTech: getTech,
            saveTech: saveTech,
            verifyTech: verifyTech
        };

        function getTech(id) {
            // sample
            return { id: 1, name: 'Angular JS', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra nec sapien et iaculis.' };
        }

        function saveTech(tech) {

        }

        function verifyTech(name) {
            return true;
        }

        return service;
    };
})();