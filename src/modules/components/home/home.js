(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name gainmasterApp.controller:MainCtrl
     * @description
     * # MainCtrl
     * Controller of the gainmasterApp
     */
    angular
      .module('gainmasterApp.components.home')
      .controller('Home', home);
        
      function home($scope){
        $scope.awesomeThings = [
          'HTML5 Boilerplate',
          'AngularJS',
          'Karma'
        ];
      }
})();