'use strict';

angular.module('workspaceApp')
  .config([ '$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('main.account', {
        url: 'users/:username',
        templateUrl: 'app/account/account.html',
        controller: 'AccountCtrl',
        controllerAs: 'ctrl',
        resolve: {
          user: [
            '$location', 'User', '$stateParams',
            function($location, User, $stateParams){
              var query = User.getByUsername({id: $stateParams.username}).$promise;
              return query.then(function(result){
                return result;
              }).catch(function(err){
                console.error(err);
                $location.path('/error/usernotfound');
              });
            }
          ]
        }
      });
  }]);