'use strict';

describe('Service: imgwr', function () {

  // load the service's module
  beforeEach(module('workspaceApp'));

  // instantiate service
  var imgwr;
  beforeEach(inject(function (_imgwr_) {
    imgwr = _imgwr_;
  }));

  it('should do something', function () {
    expect(!!imgwr).toBe(true);
  });

});
