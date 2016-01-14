angular.module('tennis.service', [])
    .factory('tennisService', function() {
        var scoreMap = {
            0:"love",
            1:"fifteen",
            2:"thirty",
            3:"fourty"
        };
        var player1Score = 0, player2Score = 0;

        return {
            getScore:getScore,
            scorePlayer1: scorePlayer1,
            scorePlayer2: scorePlayer2,
            reset:reset
        };

        function getScore(){
            if (player1Score == player2Score){
                return getDrawText(player1Score);
            } else if (isWon()){
                return getWinningPlayer()+" wins";
            } else if (isAdvantage()){
                return "advantage "+getWinningPlayer();
            }
            return "player 1: "+getScoreText(player1Score)+" - player 2: "+getScoreText(player2Score);
        }
        function isWon(){
            var difference = player1Score - player2Score;
            if (difference < 0) {
                difference *= -1;
            }
            return difference > 1 && (player1Score > 3 || player2Score > 3);
        }
        function isAdvantage(){
            return player1Score == 4 || player2Score == 4;
        }
        function getWinningPlayer(){
            if (player1Score > player2Score){
                return "player 1";
            }
            return "player 2";
        }
        function getDrawText(score){
            if (score == 3){
                return "deuce";
            }
            return scoreMap[score]+" all";
        }
        function scorePlayer1(){
            if (player2Score > 3){
                player1Score = 3;
                player2Score = 3;
            } else {
                player1Score++;
            }
        }
        function scorePlayer2(){
            if (player1Score > 3){
                player1Score = 3;
                player2Score = 3;
            } else {
                player2Score++;
            }
        }
        function getScoreText(score){
            return scoreMap[score];
        }
        function reset(){
            player1Score = 0;
            player2Score = 0;
        }
    })
;

