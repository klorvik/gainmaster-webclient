(function() {
    'use strict';

    angular
      .module('gainmasterApp')
      .config(function ($routeProvider) {
          $routeProvider
          .when('/', {
            templateUrl: 'modules/components/home/home.html',
            controller: 'Home'
          })
          .otherwise({
            templateUrl: '404.html'
          });
      });
})();