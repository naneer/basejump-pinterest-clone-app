'use strict';

angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.account', {
        url: ':username',
        templateUrl: 'app/account/account.html',
        controller: 'AccountCtrl',
        resolve: {
          user: [
            'User', '$stateParams',
            function(User, $stateParams){
              var query = User.getByUsername({id: $stateParams.username}).$promise;
              query.then(function(result){
                      console.log(result);
                      return result;
                    })
                    .catch(function(error){
                      console.error("ERROR", error);
                      return error;
                    });
            }
          ]
        }
      });
  });