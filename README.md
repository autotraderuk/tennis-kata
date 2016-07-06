# Tennis kata

## Objectives

This application keeps track of player's scores in a game of tennis and determines a winner. At the moment scores are
tracked as a number of points 0, 1, 2, 3, 4 etc for each player. This isn't quite enough to properly score a game of
tennis, however, and the following rules need to be implemented:

1. A game is won by the first player to have won at least four points in total and at least two points more than the opponent.

1. The running score of each game is described in a manner peculiar to tennis: scores from zero to three points are described as "love", "fifteen", "thirty", and "forty" respectively.

1. If at least three points have been scored by each player, and the scores are equal, the score is "deuce".

1. If at least three points have been scored by each side and a player has one more point than his opponent, the score of the game is "advantage" for the player in the lead.

You have 45 minutes to work together on a solution. It is not a race to finish but rather an exercise in displaying your ability to problem solve together. Our assessors are here to help if you have any questions.

## Assessment Quick Start

1. Follow the steps in prerequisites below to get something running.

2. From a terminal/console/whatever window, run gulp webserver

3. Open a browser and navigate to http://localhost:8080/#/home

4. Play with the UI

5. Open the tennisService.js file at src/app/home/tennisService.js

6. Good to go.


## Prerequisites

Run these commands:

<pre>
npm install
bower install
gulp
</pre>

You will get an error message if gulp (or bower) isn't installed. If so then you need to run these additional command:

<pre>
npm install -g bower
bower install
</pre>

<pre>
npm install -g gulp
gulp
</pre>
