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
        templateUrl: 'modules/components/home/home.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
