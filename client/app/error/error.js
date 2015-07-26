'use strict';

angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('error', {
        url: '/error',
        abstract: true,
        templateUrl: 'app/error/error.html',
        controller: 'ErrorCtrl'
      });
  });