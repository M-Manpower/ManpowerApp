(function () {
    'use strict';

    angular.module('manpowerApp')
        .factory('techlistSvc', function (q) {
            var getList = function () {
                return q(function (resolve, reject) {
                    resolve({
                        data: [{
                            name: 'Angular JS',
                            desc: 'none',
                            active: 'glyphicon-ok'
                        },
                        {
                            name: 'React JS',
                            desc: 'none',
                            active: 'glyphicon-remove'
                        }
                        ]
                    });
                 });
            }
            return {
                'get': getList
            };
        });
})();