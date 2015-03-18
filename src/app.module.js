(function() {
    'use strict';

    /**
     * @ngdoc overview
     * @name bachelorWebClientApp
     * @description
     * # bachelorWebClientApp
     *
     * Main module of the application.
     */
    angular
      .module('gainmasterApp', [
        'gainmasterApp.core',
        'gainmasterApp.home'
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
