angular.module( 'tennis.home', [
  'ui.router',
    'tennis.service'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Tennis Game' }
  });
})

.controller( 'HomeCtrl', function HomeController( $scope, tennisService ) {
  $scope.scoreText = "Press the button to begin";

  $scope.newGame = function(){
    tennisService.reset();
    $scope.scoreText = tennisService.getScore();
    $scope.showButtons = true;
  };

  $scope.scorePlayer1 = function(){
    tennisService.scorePlayer1();
    $scope.scoreText = tennisService.getScore();
  };

  $scope.scorePlayer2 = function(){
    tennisService.scorePlayer2();
    $scope.scoreText = tennisService.getScore();
  };
})

;

