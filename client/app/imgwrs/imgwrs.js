'use strict';

angular.module('workspaceApp')
  .config([ '$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('imgwrs', {
        url: '/imgwrs/:id',
        templateUrl: 'app/imgwrs/imgwrs.html',
        controller: 'ImgwrsCtrl',
        controllerAs: 'ctrl',
        onEnter: [
          '$window',
          function($window){
            $window.scrollTo(0, 0);
          }
        ],
        resolve: {
          imgwr: [
            '$location', 'Imgwr', '$stateParams',
            function($location, Imgwr, $stateParams){
              var query = Imgwr.get({id: $stateParams.id}).$promise;
              return query.then(function(result){
                return result;
              }).catch(function(err){
                console.error(err);
                $location.path('/error/pagenotfound');
              });
            }
          ]
        }
      });
  }]);