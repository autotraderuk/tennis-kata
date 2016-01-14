var EC = protractor.ExpectedConditions;

describe('tennis page tests', function() {

    beforeEach( function(){
        browser.get('http://localhost:8080');
    });

    var checkButtonVisibility = function(visible){

    };

    it('initial screen', function() {
        expect(browser.getTitle()).toEqual('Tennis Game');
        expect(element(by.binding('scoreText')).getText()).toEqual('Press the button to begin');
        expect(element(by.id('scorePlayer1')).isDisplayed()).toEqual(false);
        expect(element(by.id('scorePlayer2')).isDisplayed()).toEqual(false);
    });

    var setupNewGame = function(){
        element(by.id('newGame')).click();
        expect(element(by.binding('scoreText')).getText()).toEqual('love all');
        expect(element(by.id('scorePlayer1')).isDisplayed()).toEqual(true);
        expect(element(by.id('scorePlayer2')).isDisplayed()).toEqual(true);
    };

    var checkScoreText = function(selector, text){
        expect(selector.getText()).toEqual(text);
    }

    it('new game', function() {
        setupNewGame();
    });

    it('15 0', function() {
        setupNewGame();
        element(by.id('scorePlayer1')).click();
        var $scoreText = element(by.binding('scoreText'));
        checkScoreText($scoreText, 'player 1: fifteen - player 2: love');
    });

    it('30 0', function() {
        setupNewGame();
        var $button1 = element(by.id('scorePlayer1'));
        var $scoreText = element(by.binding('scoreText'));

        $button1.click();
        checkScoreText($scoreText, 'player 1: fifteen - player 2: love');
        $button1.click();
        checkScoreText($scoreText, 'player 1: thirty - player 2: love');
    });

    it('40 0', function() {
        setupNewGame();
        var $button1 = element(by.id('scorePlayer1'));
        var $scoreText = element(by.binding('scoreText'));

        $button1.click();
        checkScoreText($scoreText, 'player 1: fifteen - player 2: love');
        $button1.click();
        checkScoreText($scoreText, 'player 1: thirty - player 2: love');
        $button1.click();
        checkScoreText($scoreText, 'player 1: fourty - player 2: love');
    });

    it('0 15', function() {
        setupNewGame();
        var $button2 = element(by.id('scorePlayer2'));
        var $scoreText = element(by.binding('scoreText'));
        $button2.click();
        checkScoreText($scoreText, 'player 1: love - player 2: fifteen');
    });

    it('0 30', function() {
        setupNewGame();
        var $button2 = element(by.id('scorePlayer2'));
        var $scoreText = element(by.binding('scoreText'));
        $button2.click();
        checkScoreText($scoreText, 'player 1: love - player 2: fifteen');
        $button2.click();
        checkScoreText($scoreText, 'player 1: love - player 2: thirty');
    });

    it('0 40', function() {
        setupNewGame();
        var $button2 = element(by.id('scorePlayer2'));
        var $scoreText = element(by.binding('scoreText'));
        $button2.click();
        checkScoreText($scoreText, 'player 1: love - player 2: fifteen');
        $button2.click();
        checkScoreText($scoreText, 'player 1: love - player 2: thirty');
        $button2.click();
        checkScoreText($scoreText, 'player 1: love - player 2: fourty');
    });

    it('15 all', function() {
        setupNewGame()
        var $button1 = element(by.id('scorePlayer1'));;
        var $button2 = element(by.id('scorePlayer2'));
        var $scoreText = element(by.binding('scoreText'));
        $button1.click();
        checkScoreText($scoreText, 'player 1: fifteen - player 2: love');
        $button2.click();
        checkScoreText($scoreText, 'fifteen all');
    });

    it('30 all', function() {
        setupNewGame()
        var $button1 = element(by.id('scorePlayer1'));;
        var $button2 = element(by.id('scorePlayer2'));
        var $scoreText = element(by.binding('scoreText'));
        $button1.click();
        checkScoreText($scoreText, 'player 1: fifteen - player 2: love');
        $button2.click();
        checkScoreText($scoreText, 'fifteen all');
        $button1.click();
        checkScoreText($scoreText, 'player 1: thirty - player 2: fifteen');
        $button2.click();
        checkScoreText($scoreText, 'thirty all');
    });

    it('deuce', function() {
        setupNewGame()
        var $button1 = element(by.id('scorePlayer1'));;
        var $button2 = element(by.id('scorePlayer2'));
        var $scoreText = element(by.binding('scoreText'));
        $button1.click();
        checkScoreText($scoreText, 'player 1: fifteen - player 2: love');
        $button2.click();
        checkScoreText($scoreText, 'fifteen all');
        $button1.click();
        checkScoreText($scoreText, 'player 1: thirty - player 2: fifteen');
        $button2.click();
        checkScoreText($scoreText, 'thirty all');
        $button1.click();
        checkScoreText($scoreText, 'player 1: fourty - player 2: thirty');
        $button2.click();
        checkScoreText($scoreText, 'deuce');
    });

    it('advantage player 1', function() {
        setupNewGame()
        var $button1 = element(by.id('scorePlayer1'));;
        var $button2 = element(by.id('scorePlayer2'));
        var $scoreText = element(by.binding('scoreText'));
        $button1.click();
        checkScoreText($scoreText, 'player 1: fifteen - player 2: love');
        $button2.click();
        checkScoreText($scoreText, 'fifteen all');
        $button1.click();
        checkScoreText($scoreText, 'player 1: thirty - player 2: fifteen');
        $button2.click();
        checkScoreText($scoreText, 'thirty all');
        $button1.click();
        checkScoreText($scoreText, 'player 1: fourty - player 2: thirty');
        $button2.click();
        checkScoreText($scoreText, 'deuce');
        $button1.click();
        checkScoreText($scoreText, 'advantage player 1');
    });

    it('advantage player 2', function() {
        setupNewGame()
        var $button1 = element(by.id('scorePlayer1'));;
        var $button2 = element(by.id('scorePlayer2'));
        var $scoreText = element(by.binding('scoreText'));
        $button1.click();
        checkScoreText($scoreText, 'player 1: fifteen - player 2: love');
        $button2.click();
        checkScoreText($scoreText, 'fifteen all');
        $button1.click();
        checkScoreText($scoreText, 'player 1: thirty - player 2: fifteen');
        $button2.click();
        checkScoreText($scoreText, 'thirty all');
        $button1.click();
        checkScoreText($scoreText, 'player 1: fourty - player 2: thirty');
        $button2.click();
        checkScoreText($scoreText, 'deuce');
        $button2.click();
        checkScoreText($scoreText, 'advantage player 2');
    });

    it('player 1 wins easily', function() {
        setupNewGame();
        var $button1 = element(by.id('scorePlayer1'));
        var $scoreText = element(by.binding('scoreText'));

        $button1.click();
        checkScoreText($scoreText, 'player 1: fifteen - player 2: love');
        $button1.click();
        checkScoreText($scoreText, 'player 1: thirty - player 2: love');
        $button1.click();
        checkScoreText($scoreText, 'player 1: fourty - player 2: love');
        $button1.click();
        checkScoreText($scoreText, 'player 1 wins');
    });

    it('player 1 wins from advantage', function() {
        setupNewGame()
        var $button1 = element(by.id('scorePlayer1'));;
        var $button2 = element(by.id('scorePlayer2'));
        var $scoreText = element(by.binding('scoreText'));
        $button1.click();
        checkScoreText($scoreText, 'player 1: fifteen - player 2: love');
        $button2.click();
        checkScoreText($scoreText, 'fifteen all');
        $button1.click();
        checkScoreText($scoreText, 'player 1: thirty - player 2: fifteen');
        $button2.click();
        checkScoreText($scoreText, 'thirty all');
        $button1.click();
        checkScoreText($scoreText, 'player 1: fourty - player 2: thirty');
        $button2.click();
        checkScoreText($scoreText, 'deuce');
        $button1.click();
        checkScoreText($scoreText, 'advantage player 1');
        $button1.click();
        checkScoreText($scoreText, 'player 1 wins');
    });

    it('player 1 deuce from advantage', function() {
        setupNewGame()
        var $button1 = element(by.id('scorePlayer1'));;
        var $button2 = element(by.id('scorePlayer2'));
        var $scoreText = element(by.binding('scoreText'));
        $button1.click();
        checkScoreText($scoreText, 'player 1: fifteen - player 2: love');
        $button2.click();
        checkScoreText($scoreText, 'fifteen all');
        $button1.click();
        checkScoreText($scoreText, 'player 1: thirty - player 2: fifteen');
        $button2.click();
        checkScoreText($scoreText, 'thirty all');
        $button1.click();
        checkScoreText($scoreText, 'player 1: fourty - player 2: thirty');
        $button2.click();
        checkScoreText($scoreText, 'deuce');
        $button1.click();
        checkScoreText($scoreText, 'advantage player 1');
        $button2.click();
        checkScoreText($scoreText, 'deuce');
    });

    it('game reset half way through', function(){
        setupNewGame()
        var $button1 = element(by.id('scorePlayer1'));;
        var $button2 = element(by.id('scorePlayer2'));
        var $scoreText = element(by.binding('scoreText'));
        $button1.click();
        checkScoreText($scoreText, 'player 1: fifteen - player 2: love');
        $button2.click();
        checkScoreText($scoreText, 'fifteen all');
        $button1.click();
        checkScoreText($scoreText, 'player 1: thirty - player 2: fifteen');
        $button2.click();
        checkScoreText($scoreText, 'thirty all');
        $button1.click();
        checkScoreText($scoreText, 'player 1: fourty - player 2: thirty');
        element(by.id('newGame')).click();
        checkScoreText($scoreText, 'love all');
    });
});