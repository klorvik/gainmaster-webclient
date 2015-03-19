'use strict';

describe('Controller: Home', function () {

  // load the controller's module
  beforeEach(module('gainmasterApp'));

  var Home,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Home = $controller('Home', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
