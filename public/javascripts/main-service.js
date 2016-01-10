/*
	'main' service implementation.
	Makes GET and POST requests to the server via 'server' service.
*/

angular.module('MyApp')
  .factory('main', function($resource, server, $log, $q) {

  	var service = {};
  	var loadingSpinner = document.getElementById('spinner-container').children[0];

	service.postCommentToServer = function(comment) {
		loadingSpinner.className = 'spinner';
		var deferred = $q.defer();
		var vid = document.getElementById('video');
		comment.time = Math.ceil(vid.currentTime);
		return server.save({ comment : comment })
			.$promise
			.then(function() {
				deferred.resolve('Successful');
				loadingSpinner.className = '';
		        })
		        .catch(function(err) {
		        	deferred.reject('Rejected');
		        	$log.error(err);
		        	loadingSpinner.className = '';
		        });
		return deffered;
	};

	service.fetchCommentsFromServer = function() {
		loadingSpinner.className = 'spinner';
		return server.query()
			.$promise
			.then (function(data) {
				loadingSpinner.className = '';
				return data;
			})
			.catch(function(err) {
				$log.error(err);
			});    	
		};

	service.clearCommentsFromServer = function() {
		loadingSpinner.className = 'spinner';
		return server.delete()
			.$promise
			.then (function() {
				loadingSpinner.className = '';
  			})
			.catch(function(err) {
				$log.error(err);
			});    
		};

	return service;
  });