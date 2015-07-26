'use strict';

angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('imgwrs', {
        url: '/imgwrs/:id',
        templateUrl: 'app/imgwrs/imgwrs.html',
        controller: 'ImgwrsCtrl',
        controllerAs: 'ctrl'
      });
  });