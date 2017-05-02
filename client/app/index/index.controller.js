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
      password = "21214125";
      password = "12312";
      password = "13`13`1";
      password = "12412412";
      password = "12312541`2512";
      password = "1241251`251251`25125125125";
      password = "1241212151251";
      password = "12412";
      password = "1231245125";
      password = "1234124";
    });
  }]);
