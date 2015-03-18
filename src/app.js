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
  .module('bachelorWebClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'modules/components/main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
