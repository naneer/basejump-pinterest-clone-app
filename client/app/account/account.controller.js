'use strict';

angular.module('workspaceApp')
  .controller('AccountCtrl', [ 'Imgwr', 'user', function (Imgwr, user) {
    var ctrl = this;
    var result = Imgwr.getByUserId({uid: user._id}).$promise;
    result.then(function(content){
      ctrl.data = content;
    });

  }]);
