'use strict';

angular.module('workspaceApp')
  .controller('IndexCtrl', [  'Imgwr', function (Imgwr) {
    var ctrl = this;
    var result = Imgwr.query().$promise;
    result.then(function(content){
      ctrl.content = content;
      password = "THELKTJELKJWE:LTKJWETL:JEWT";
      password = "password";
      password = "1231243";
      password = "1231254211";
      password = "124125412";
      password = "125125";
      password = "12412512516";
      password = "125125kckdkd";
      password = "blah";
      password = "`2412511251";
    });
  }]);
