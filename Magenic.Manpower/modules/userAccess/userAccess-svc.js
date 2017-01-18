(function () {
    'use strict';
    var manpowerApp = angular.module('manpowerApp', []);

    manpowerApp.factory('userAccessSvc', function ($q) {

              var getPermissions = function () {
                  return $q(function (resolve, reject) {
                      resolve({
                          data:
                            [
                                {
                                    Id: '1',
                                    Name: '001',
                                    Description: 'User can request manpower'
                                }, 
                                {
                                    Id: '2',
                                    Name: '002',
                                    Description: 'User can add applicant as candidate to a reference number'
                                },
                                {
                                    Id: '3',
                                    Name: '003',
                                    Description: 'User can cancel a request'
                                }
                            ]
                      });
                  });
              };

              return {
                  'get': getPermissions
              };
          });
})();