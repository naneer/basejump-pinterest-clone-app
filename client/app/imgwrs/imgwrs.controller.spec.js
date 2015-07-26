'use strict';

describe('Controller: ImgwrsCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var ImgwrsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ImgwrsCtrl = $controller('ImgwrsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
