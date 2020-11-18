const { expect } = require("chai");

describe("Tabs", () => {
    beforeEach(() => {
         // load the webpage 
         browser.url("./#/tabs");
    });
    it("Shows the first tab on page load", () => {
        // fetch the list of tab items with $$
        let tabList = browser.$$("li.nav-item");
        // console.log(tabList.length);
        let firstTab = tabList[0];
        expect(firstTab.$("a").getAttribute("class")).to.contain('active');
    });

    it("shows the first tab content on page load", () => {
        // fetch the paragraph
        let element = browser.$("div.tab-pane > p");
        let isDisplayed = element.isDisplayed(); // returns bool
        expect(isDisplayed).to.be.true;
    })

    it('displays black header of the first tab', () => {
        let tabList = browser.$$("li.nav-item");
        let firstTab = tabList[0];
        const firstLink = firstTab.$("a");
        console.log(firstLink.getCSSProperty("color"));
        expect(firstLink.getCSSProperty("color").parsed.hex).to.equal("#495057");  
    })


    it('displays blue header of the second tab', () => {
        let tabList = browser.$$("li.nav-item");
        let secondTab = tabList[1];
        const secondLink = secondTab.$("a");
        console.log(secondLink.getCSSProperty("color"));
        expect(secondLink.getCSSProperty("color").parsed.hex).to.equal("#007bff");  
    })

    it('displays grey header of the third tab', () => {
        let tabList = browser.$$("li.nav-item");
        let thirdTab = tabList[2];
        const thirdLink = thirdTab.$("a");
        console.log(thirdLink.getCSSProperty("color"));
        expect(thirdLink.getCSSProperty("color").parsed.hex).to.equal("#6c757d");  
    })

    it("the second becomes active when click on fancy tab", () => {
        let secondTab = browser.$("a#fancy-tab");
        secondTab.click();
        expect(secondTab.getAttribute("class")).to.contain("active");
    })
})