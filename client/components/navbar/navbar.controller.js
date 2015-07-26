'use strict';

angular.module('workspaceApp')
  .controller('NavbarCtrl', [ '$scope', '$location', 'Auth', '$window', '$modal', function ($scope, $location, Auth, $window, $modal) {
    $scope.menu = [{
      'title': '',
      'link': ''
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
    
    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
    
    $scope.imgwrNew = function() {
          var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'components/re-pint/re-pint.new.modal/re-pint.new.modal.html',
            controller: 'RePintNewModalCtrl',
            controllerAs: 'newModalCtrl',
            size: 'sm'
          });
    };
  }]);