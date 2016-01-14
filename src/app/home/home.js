angular.module( 'tennis.home', [
  'ui.router',
  'tennis.service'
])
.config(config).controller( 'HomeCtrl', HomeController );

function config( $stateProvider ) {
  $stateProvider.state('home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data: {pageTitle: 'Tennis Game'}
  });
}

function HomeController( $scope, tennisService ) {
  $scope.scoreText = "Press the button to begin";
  $scope.newGame = newGame;
  $scope.scorePlayer1 = scorePlayer1;
  $scope.scorePlayer2 = scorePlayer2;

  function newGame(){
    tennisService.reset();
    $scope.scoreText = tennisService.getScore();
    $scope.showButtons = true;
  }

  function scorePlayer1(){
    tennisService.scorePlayer1();
    $scope.scoreText = tennisService.getScore();
  }

  function scorePlayer2(){
    tennisService.scorePlayer2();
    $scope.scoreText = tennisService.getScore();
  }
}

