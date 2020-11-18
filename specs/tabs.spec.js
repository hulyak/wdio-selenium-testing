describe("Tabs", () => {
    it("Shows the first tab on page load", () => {
        // load the webpage 
        browser.url("./#/tabs");
        // fetch the list of tab items
        let tabList = browser.$$("li.nav-item");
        console.log(tabList.length);
    })
})