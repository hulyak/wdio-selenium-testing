describe("iframe", () => {
    beforeEach(() => {
        browser.url("./#/iframe")
    })

    it("renders the test inside the iframe", () => {
        let btn = browser.$("button");
        let header = browser.$("h1");
        btn.click();
        // https://webdriver.io/docs/api/webdriver.html#switchtoframe
        browser.switchToFrame(0); // enters in the iframe element
        console.log(header.getText());
        expect(header.getText()).to.equal("From parent to iframe");
    })
})