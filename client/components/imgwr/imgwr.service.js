'use strict';

angular.module('workspaceApp')
  .factory('Imgwr', [ '$resource', function ($resource) {
    return $resource('/api/things/:id/:user_id', {
      id: '@id',
      username: '@username'
    }, {
      getByUserId: {
        method: 'GET',
        isArray: true,
        params: {
          id: 'users'
        }
      }
    });
  }]);
