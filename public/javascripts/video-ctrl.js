/*
    Home Controller
    Connects to the service layer.
*/

angular.module('MyApp')
  .controller('VideoCtrl', ['$scope', 'main', '$log', function($scope, main, $log) {

    var newComment = {};

    $scope.fetchComments = function() {
      main.fetchCommentsFromServer()
        .then(function(comments) {
          $scope.returnedComments = _.sortBy(comments, "time");
        })
        .catch(function(err) {
          $log.error(err);
        });
    };

    $scope.postComment = function() {
      newComment.commentText = $scope.commentText;
      main.postCommentToServer(newComment)
        .then(function() {
          $scope.fetchComments();
        })
        .catch(function(err) {
          $log.error(err);
        });
    };

    $scope.clearComments = function() {
      main.clearCommentsFromServer()
        .then(function() {
          $scope.fetchComments();
        })
        .catch(function(err) {
          $log.error(err);
        });
    };

    $scope.fetchComments();

  }]);