
describe('Google page', () => {
    it('should have the right title' , () => {
        browser.url('https://www.google.com');
        const title = browser.getTitle();
        // assert.strictEqual(title, 'Google');
        expect(title).to.equal('Google');
    })
})
