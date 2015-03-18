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
      .module('gainmasterApp.home')
      .controller('Home', Home);
    
      Home.$inject = ['$scope'];
        
      function Home($scope){
        $scope.awesomeThings = [
          'HTML5 Boilerplate',
          'AngularJS',
          'Karma'
        ];
      }
})();