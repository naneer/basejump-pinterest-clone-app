'use strict';

angular.module('workspaceApp')
  .controller('IndexCtrl', [  'Imgwr', function (Imgwr) {
    var ctrl = this;
    var result = Imgwr.query().$promise;
    result.then(function(content){
      ctrl.content = content;
    });
  }]);
