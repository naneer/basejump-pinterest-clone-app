'use strict';

angular.module('workspaceApp')
  .controller('ImgwrsCtrl', [ '$timeout', '$state', 'imgwr', 'Auth', 'Imgwr', 
  function ($timeout, $state, imgwr, Auth, Imgwr) {
    var ctrl = this;
    ctrl.imgwr = imgwr;
    var imgLd = imagesLoaded(document.getElementsByClassName('imgload'));
    imgLd.on('progress', function(instance, image){
      if(!image.isLoaded){
        image.img.src = "/assets/images/page-not-found.png";
      }
    });
    if (ctrl.imgwr._owner._id === Auth.getCurrentUser()._id){
        ctrl.delete = function(){
        ctrl.stacked = 1;
        var book = Imgwr.delete({ id: ctrl.imgwr._id }, function(value, res){
           ctrl.stacked = 2;
           $timeout(function(){
               $state.go('main.account', {username: Auth.getCurrentUser().username});
           }, 500);
         }, function(err){
            console.log(err);
            ctrl.stacked = 0;
         });
      }
    }
  }]);
