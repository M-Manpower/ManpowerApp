(function () {
    'use strict';

    angular
        .module('rolesModule')
        .factory('rolesSvc', rolesSvc)

    rolesSvc.$inject = ['xhr', 'appSettings'];

    function rolesSvc(xhr, appSettings) {

        function getRoles() {
            var url = appSettings.serverPath + 'api/roles';

            return xhr.get(url);
        };

        return {
            get : getRoles
        };
    }

})();