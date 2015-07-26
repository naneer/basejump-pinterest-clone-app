'use strict';

angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('error.pagenotfound', {
        url: '/pagenotfound',
        templateUrl: 'app/error/error.pagenotfound/error.pagenotfound.html',
        controller: 'ErrorPagenotfoundCtrl'
      });
  });