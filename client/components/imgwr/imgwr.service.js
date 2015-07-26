'use strict';

angular.module('workspaceApp')
  .factory('imgwr', [ '$resource', function ($resource) {
    return $resource('/things/:id/:username', {
      id: '@id',
      username: '@username'
    }, {
      getByUser: {
        method: 'GET',
        isArray: true,
        params: {
          id: 'users'
        }
      }
    });
  }]);
