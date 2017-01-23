(function () {
    'use strict';

    angular.module('manpowerApp')
        .factory('primarySkillsService', primarySkillsService)

    primarySkillsService.$inject = ['$timeout', '$http', 'primarySkillsContext'];

    function primarySkillsService($timeout, $http, primarySkillsContext) {

        return {
            getPrimarySkills: getPrimarySkills            
        };

        function getPrimarySkills() {            
            return primarySkillsContext.getPrimarySkills();
        }

    }

})();