angular.module('MyApp')
	.directive('commentsDir', function ($log) {
    return{
        controller: function ($scope, $element) {
        	$log.log('element',$element);
        	$log.log('element[0]', $element[0]);
            $scope.onTimeUpdate = function () {
              $scope.videoCurrentTime = Math.floor($element[0].currentTime);
              $scope.$apply();
            };
        },
        link: function (scope, elm) {
          $log.log('elm',elm);
		      scope.$watch('videoCurrentTime', function (newVar) {
		      $log.log(newVar);
          elm.bind('timeupdate', scope.onTimeUpdate);
        }
    };
});