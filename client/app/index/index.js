'use strict';

angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.all', {
        url: '',
        templateUrl: 'app/index/index.html',
        controller: 'IndexCtrl',
        controllerAs: 'ctrl'
      });
  });