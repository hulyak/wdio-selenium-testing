require("dotenv").config();

// import the default configuration
let defaultConfig = require("./wdio.conf.js").config;

let capabilities = [
    {
        // setup the browser
        browserName: "chrome",
        // setup the billname: username + current date
        build: process.env.BROWSERSTACK_USERNAME + " " + new Date().toDateString(),
        // setup the project
        project: 'WebdriverIO Course',
    }
]

// delete the path property
delete defaultConfig.path;

// clone the default config and setup browser stack service
var browserstackConfig = Object.assign(defaultConfig, {
    services: ['browserstack'],
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    browserstackLocal: true,
    capabilities
})

exports.config = browserstackConfig;