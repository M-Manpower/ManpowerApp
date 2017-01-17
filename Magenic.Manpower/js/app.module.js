(function () {
  'use strict';

  angular.module('manpowerApp', ['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider.
          when("roles", {
            templateUrl: "js/role/roles-tmpl.html",
            controller: "rolesCtrl",
            controllerAs: "roles"
          }).
          //when("/drivers/:id", { templateUrl: "feedboard/views/driver.html", controller: "driverCtrl" }).
          otherwise({ redirectTo: '/home' });
    });
})();