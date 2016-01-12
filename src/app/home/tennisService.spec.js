/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */
describe( 'tennis service score calculations', function() {
  beforeEach( module( 'tennis.service' ) );

  it( 'new game', inject( function(tennisService) {
    expect( tennisService.getScore()).toBe("love all");
  }));

  it( '15 0', inject( function(tennisService) {
    tennisService.player1Score();
    expect( tennisService.getScore()).toBe("player 1: fifteen - player 2: love");
  }));

  it( '30 0', inject( function(tennisService) {
    tennisService.player1Score();
    tennisService.player1Score();
    expect( tennisService.getScore()).toBe("player 1: thirty - player 2: love");
  }));

  it( '40 0', inject( function(tennisService) {
    tennisService.player1Score();
    tennisService.player1Score();
    tennisService.player1Score();
    expect( tennisService.getScore()).toBe("player 1: fourty - player 2: love");
  }));

  it( '15 all', inject( function(tennisService) {
    tennisService.player1Score();
    tennisService.player2Score();
    expect( tennisService.getScore()).toBe("fifteen all");
  }));

  it( '30 all', inject( function(tennisService) {
    tennisService.player1Score();
    tennisService.player2Score();
    tennisService.player1Score();
    tennisService.player2Score();
    expect( tennisService.getScore()).toBe("thirty all");
  }));

  it( 'deuce', inject( function(tennisService) {
    tennisService.player1Score();
    tennisService.player2Score();
    tennisService.player1Score();
    tennisService.player2Score();
    tennisService.player1Score();
    tennisService.player2Score();
    expect( tennisService.getScore()).toBe("deuce");
  }));

  it( 'advantage player 1', inject( function(tennisService) {
    tennisService.player1Score();
    tennisService.player2Score();
    tennisService.player1Score();
    tennisService.player2Score();
    tennisService.player1Score();
    tennisService.player2Score();
    tennisService.player1Score();
    expect( tennisService.getScore()).toBe("advantage player 1");
  }));

  it( 'advantage player 2', inject( function(tennisService) {
    tennisService.player1Score();
    tennisService.player2Score();
    tennisService.player1Score();
    tennisService.player2Score();
    tennisService.player1Score();
    tennisService.player2Score();
    tennisService.player2Score();
    expect( tennisService.getScore()).toBe("advantage player 2");
  }));

  it( 'player 1 wins easily', inject( function(tennisService) {
    tennisService.player1Score();
    tennisService.player1Score();
    tennisService.player1Score();
    tennisService.player1Score();
    expect( tennisService.getScore()).toBe("player 1 wins");
  }));

  it( 'player 1 wins from advantage', inject( function(tennisService) {
    tennisService.player1Score();
    tennisService.player2Score();
    tennisService.player1Score();
    tennisService.player2Score();
    tennisService.player1Score();
    tennisService.player2Score();
    tennisService.player1Score();
    tennisService.player1Score();
    expect( tennisService.getScore()).toBe("player 1 wins");
  }));

  it( 'player 1 deuce from advantage', inject( function(tennisService) {
    tennisService.player1Score();
    tennisService.player2Score();
    tennisService.player1Score();
    tennisService.player2Score();
    tennisService.player1Score();
    tennisService.player2Score();
    tennisService.player1Score();
    tennisService.player2Score();
    expect( tennisService.getScore()).toBe("deuce");
  }));

});

