'use strict';

describe('Controller: ErrorPagenotfoundCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var ErrorPagenotfoundCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ErrorPagenotfoundCtrl = $controller('ErrorPagenotfoundCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
