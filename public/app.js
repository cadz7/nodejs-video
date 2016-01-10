/*
    Defining routes
*/
angular.module('MyApp', ['ngCookies', 'ngResource', 'ngMessages', 'ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html'
      })
      .state('video', {
        url: '/video',
        templateUrl: 'views/video.html',
        controller: "VideoCtrl"
      })
      .state('documentation', {
        url: '/documentation',
        templateUrl: 'views/documentation.html'
      });
	$urlRouterProvider.otherwise('/home');
  });