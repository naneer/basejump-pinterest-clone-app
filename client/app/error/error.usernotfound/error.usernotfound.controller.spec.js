'use strict';

describe('Controller: ErrorUsernotfoundCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var ErrorUsernotfoundCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ErrorUsernotfoundCtrl = $controller('ErrorUsernotfoundCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
