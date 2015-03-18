(function() {
    'use strict';

    angular
      .module('gainmasterApp', [
        'ngRoute',
      ])
      .config(function ($routeProvider) {
          $routeProvider
          .when('/', {
            templateUrl: 'modules/components/home/home.html',
            controller: 'Home'
          })
          .otherwise({
            redirectTo: '/'
          });
      });
})();