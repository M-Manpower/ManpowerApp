(function () {
  'use strict';
  angular.module('manpowerApp')
        .factory('rolesSvc', function ($q) {
          var getRoles = function () {
            //temporary for sample data population
            return $q(function (resolve, reject) {
              setTimeout(function () {
                resolve({
                  data: [{
                    name: 'Administrator'
                  }, {
                    name: 'Consulting Manager'
                  }, {
                    name: 'Human Resource'
                  }
                  ]
                });
              }, 500);
            });
          };

          return {
            'get': getRoles
          };
        });
})();