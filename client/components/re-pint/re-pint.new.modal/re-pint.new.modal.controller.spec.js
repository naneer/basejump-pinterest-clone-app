'use strict';

describe('Controller: RePintNewModalCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var RePintNewModalCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RePintNewModalCtrl = $controller('RePintNewModalCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
