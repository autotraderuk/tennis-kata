describe( 'tennis service score calculations', function() {
  beforeEach( module( 'tennis.service' ) );

  it( 'new game', inject( function(tennisService) {
    expect( tennisService.getScore()).toBe("love all");
  }));

  it( '15 0', inject( function(tennisService) {
    tennisService.scorePlayer1();
    expect( tennisService.getScore()).toBe("player 1: fifteen - player 2: love");
  }));

  it( '30 0', inject( function(tennisService) {
    tennisService.scorePlayer1();
    tennisService.scorePlayer1();
    expect( tennisService.getScore()).toBe("player 1: thirty - player 2: love");
  }));

  it( '40 0', inject( function(tennisService) {
    tennisService.scorePlayer1();
    tennisService.scorePlayer1();
    tennisService.scorePlayer1();
    expect( tennisService.getScore()).toBe("player 1: fourty - player 2: love");
  }));

  it( '0 15', inject( function(tennisService) {
    tennisService.scorePlayer2();
    expect( tennisService.getScore()).toBe("player 1: love - player 2: fifteen");
  }));

  it( '0 30', inject( function(tennisService) {
    tennisService.scorePlayer2();
    tennisService.scorePlayer2();
    expect( tennisService.getScore()).toBe("player 1: love - player 2: thirty");
  }));

  it( '0 40', inject( function(tennisService) {
    tennisService.scorePlayer2();
    tennisService.scorePlayer2();
    tennisService.scorePlayer2();
    expect( tennisService.getScore()).toBe("player 1: love - player 2: fourty");
  }));

  it( '15 all', inject( function(tennisService) {
    tennisService.scorePlayer1();
    tennisService.scorePlayer2();
    expect( tennisService.getScore()).toBe("fifteen all");
  }));

  it( '30 all', inject( function(tennisService) {
    tennisService.scorePlayer1();
    tennisService.scorePlayer2();
    tennisService.scorePlayer1();
    tennisService.scorePlayer2();
    expect( tennisService.getScore()).toBe("thirty all");
  }));

  it( 'deuce', inject( function(tennisService) {
    tennisService.scorePlayer1();
    tennisService.scorePlayer2();
    tennisService.scorePlayer1();
    tennisService.scorePlayer2();
    tennisService.scorePlayer1();
    tennisService.scorePlayer2();
    expect( tennisService.getScore()).toBe("deuce");
  }));

  it( 'advantage player 1', inject( function(tennisService) {
    tennisService.scorePlayer1();
    tennisService.scorePlayer2();
    tennisService.scorePlayer1();
    tennisService.scorePlayer2();
    tennisService.scorePlayer1();
    tennisService.scorePlayer2();
    tennisService.scorePlayer1();
    expect( tennisService.getScore()).toBe("advantage player 1");
  }));

  it( 'advantage player 2', inject( function(tennisService) {
    tennisService.scorePlayer1();
    tennisService.scorePlayer2();
    tennisService.scorePlayer1();
    tennisService.scorePlayer2();
    tennisService.scorePlayer1();
    tennisService.scorePlayer2();
    tennisService.scorePlayer2();
    expect( tennisService.getScore()).toBe("advantage player 2");
  }));

  it( 'player 1 wins easily', inject( function(tennisService) {
    tennisService.scorePlayer1();
    tennisService.scorePlayer1();
    tennisService.scorePlayer1();
    tennisService.scorePlayer1();
    expect( tennisService.getScore()).toBe("player 1 wins");
  }));

  it( 'player 1 wins from advantage', inject( function(tennisService) {
    tennisService.scorePlayer1();
    tennisService.scorePlayer2();
    tennisService.scorePlayer1();
    tennisService.scorePlayer2();
    tennisService.scorePlayer1();
    tennisService.scorePlayer2();
    tennisService.scorePlayer1();
    tennisService.scorePlayer1();
    expect( tennisService.getScore()).toBe("player 1 wins");
  }));

  it( 'player 1 deuce from advantage', inject( function(tennisService) {
    tennisService.scorePlayer1();
    tennisService.scorePlayer2();
    tennisService.scorePlayer1();
    tennisService.scorePlayer2();
    tennisService.scorePlayer1();
    tennisService.scorePlayer2();
    tennisService.scorePlayer1();
    tennisService.scorePlayer2();
    expect( tennisService.getScore()).toBe("deuce");
  }));

});

