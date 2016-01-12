angular.module('tennis.service', [])
    .factory('tennisService', function() {

        var scoreMap = {
            0:"love",
            1:"fifteen",
            2:"thirty",
            3:"fourty"
        };

        var player1 = 0;
        var player2 = 0;

        return {
            getScore:getScore,
            player1Score: player1Score,
            player2Score: player2Score
        };

        function getScore(){
            if (player1 == player2){
                return getDrawText(player1);
            } else if (isWon()){
                return getWinningPlayer()+" wins";
            } else if (isAdvantage()){
                return "advantage "+getWinningPlayer();
            }
            return "player 1: "+getScoreText(player1)+" - player 2: "+getScoreText(player2);
        }
        function isWon(){
            var difference = player1 - player2;
            if (difference < 0) {
                difference *= -1;
            }
            return difference > 1 && (player1 > 3 || player2 > 3);
        }
        function isAdvantage(){
            return player1 == 4 || player2 == 4;
        }
        function getWinningPlayer(){
            if (player1 > player2){
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
        function player1Score(){
            if (player2 > 3){
                player1 = 3;
                player2 = 3;
            } else {
                player1++;
            }
        }
        function player2Score(){
            if (player1 > 3){
                player1 = 3;
                player2 = 3;
            } else {
                player2++;
            }
        }
        function getScoreText(score){
            return scoreMap[score];
        }
    })
;

