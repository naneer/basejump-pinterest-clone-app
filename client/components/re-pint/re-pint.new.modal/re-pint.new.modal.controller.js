'use strict';

angular.module('workspaceApp')
  .controller('RePintNewModalCtrl', [ '$timeout', '$state', '$modalInstance', 'Imgwr', 
  function ($timeout, $state, $modalInstance, Imgwr) {
    var newModalCtrl = this;
    newModalCtrl.imgwr = {
      url: "",
      caption: ""
    };
    newModalCtrl.close = function(){
      $modalInstance.close('close');
    };
    newModalCtrl.submit = function(){
         newModalCtrl.stacked = 1;
         var imgwr = Imgwr.save({}, newModalCtrl.imgwr, function(value, res){
           newModalCtrl.stacked = 2;
           $timeout(function(){
               $modalInstance.close('success');
               $state.go('imgwrs', { id: value._id });
           }, 500);
         }, function(err){
            console.log(err);
            newModalCtrl.stacked = 0;
         });
    };
  }]);
