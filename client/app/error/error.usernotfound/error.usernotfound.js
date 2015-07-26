'use strict';

angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('error.usernotfound', {
        url: '/usernotfound',
        templateUrl: 'app/error/error.usernotfound/error.usernotfound.html',
        controller: 'ErrorUsernotfoundCtrl'
      });
  });