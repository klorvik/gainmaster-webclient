'use strict';

/**
 * @ngdoc function
 * @name bachelorWebClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bachelorWebClientApp
 */
angular.module('bachelorWebClientApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
