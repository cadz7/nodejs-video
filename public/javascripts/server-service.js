/* ngResource implementation to integrate with node.js REST API */

angular.module('MyApp')
  .factory('server', function($resource) {
    return $resource('/comments/:_id');
  });