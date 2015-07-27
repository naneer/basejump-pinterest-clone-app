'use strict';

angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        abstract: true,
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'ctrl'
      });
  });