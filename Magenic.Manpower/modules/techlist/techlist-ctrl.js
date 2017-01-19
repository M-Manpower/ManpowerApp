(function () {
    'use strict';

    angular.module('manpowerApp')
    .controller('techlistCtrl', ['$scope', function ($scope) {
        this.list = [];
        var data = [{
            name: 'Angular JS',
            desc: 'none',
            active: 'glyphicon-ok'
        },
                        {
                            name: 'React JS',
                            desc: 'none',
                            active: 'glyphicon-remove'
                        }
        ];
        this.list = data;
        //techlistSvc.get().then(function (response) {
        //    this.list = response.data;
        //}.bind(this));
    }]);
})();