describe('tennis page tests', function() {
    it('should add have a valid title', function() {
        browser.get('https://localhost:8080');
        expect(browser.getTitle()).toEqual('Tennis Game');
    });
});