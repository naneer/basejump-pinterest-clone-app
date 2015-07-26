'use strict';

angular.module('workspaceApp')
  .controller('AccountCtrl', [ 'Imgwr', 'user', function (Imgwr, user) {
    var ctrl = this;
    console.log(user);
    var result = Imgwr.getByUserId({user_id: user._id}).$promise;
    result.then(function(content){
      ctrl.data = content;
      console.log(content);
    });
  }]);
