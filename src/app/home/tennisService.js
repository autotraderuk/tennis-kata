angular.module('tennis.service', []).factory('tennisService', tennisService);

function tennisService() {

    var player1Score = 0, player2Score = 0;

    return {
        getScore: getScore,
        scorePlayer1: scorePlayer1,
        scorePlayer2: scorePlayer2,
        reset: reset
    };

    function getScore() {
        if (isWon()) {
            return getWinningPlayer() + " wins";
        }
        return "player 1: " + player1Score + " - player 2: " + player2Score;
    }

    function isWon() {
      var difference = player1Score - player2Score;
      if (difference < 0) {
          difference *= -1;
      }
      return difference >= 2 && (player1Score > 3 || player2Score > 3);
   }

    function getWinningPlayer() {
        if (player1Score > player2Score) {
            return "player 1";
        }
        return "player 2";
    }

    function scorePlayer1() {
         player1Score++;
    }

    function scorePlayer2() {
         player2Score++;
    }

    function reset() {
        player1Score = 0;
        player2Score = 0;
    }
}
