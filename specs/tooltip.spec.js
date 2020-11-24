const { expect } = require("chai");

describe("Tooltip", function(){
    beforeEach(function() { 
        browser.url("./#/tooltip")
    })
    it("on page load the tooltip is not displayed", () => {
        let tooltip = browser.$("ngb-tooltip-window");
        expect(tooltip.isDisplayed()).to.be.false;
    })
    it("renders the tooltip on button click", () => {
        let btn = browser.$("button");
        btn.click();
        let tooltip = browser.$("ngb-tooltip-window");
        expect(tooltip.isDisplayed()).to.be.true;
    })
    it("tooltip disappears when we press ESC", () => {
        let btn = browser.$("button");
        let tooltip = browser.$("ngb-tooltip-window");
        btn.click();
        // https://webdriver.io/docs/api/browser/keys.html
        browser.keys("Escape");
        expect(tooltip.isDisplayed()).to.be.false;
    })
})