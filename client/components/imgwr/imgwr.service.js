'use strict';

angular.module('workspaceApp')
  .factory('Imgwr', [ '$resource', function ($resource) {
    return $resource('/api/things/:id/:uid', {
      id: '@id',
      uid: '@uid'
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
