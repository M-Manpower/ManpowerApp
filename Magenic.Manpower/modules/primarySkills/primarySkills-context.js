(function () {
    'use strict';

    angular
        .module('manpowerApp')
        .factory('primarySkillsContext', primarySkillsContext)

    primarySkillsContext.$inject = ['xhr', 'appSettings'];

    function primarySkillsContext(xhr, appSettings) {

        return {
            getPrimarySkills: getPrimarySkills            
        };

        function getPrimarySkills() {
           // var url = appSettings.serverPath + 'api/primaryskills/';

            // return xhr.get(url, username);

            return [
               { id: 1, name: 'Java', description: 'This is a PL 1', isActive: true },
               { id: 2, name: '.Net', description: 'This is a PL 2', isActive: false },
               { id: 3, name: 'PHP', description: 'This is a PL 3', isActive: true },
               { id: 4, name: 'C#', description: 'This is a PL 4', isActive: false },
               { id: 5, name: 'VB.NET', description: 'This is a PL 5', isActive: true }
            ];
        }

  
    }

})();