'use strict';

angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.account', {
        url: ':username',
        templateUrl: 'app/account/account.html',
        controller: 'AccountCtrl',
        controllerAs: 'ctrl',
        onEnter: function(user) {
        },
        resolve: {
          user: [
            'User', '$stateParams',
            function(User, $stateParams){
              return User.getByUsername({id: $stateParams.username});
            }
          ]
        }
      });
  });