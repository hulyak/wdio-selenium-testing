
require('dotenv').config();

// import the default configuration
var defaultConfig = require('./wdio.conf.js').config;

// we don't need the path property
delete defaultConfig.path;

// clone default config and set up browserstack service
var crossbrowsertesting = Object.assign(defaultConfig, {
    hostname: 'hub.crossbrowsertesting.com',
    port: 80,

    services: ['crossbrowsertesting'],
    user: process.env.CBT_USERNAME,
    key: process.env.CBT_AUTHKEY,
    cbtTunnel: false,

    capabilities: [{
        maxInstances: 5,
        name: 'WDIO Course',
        platform: 'Windows',
        browserName: 'firefox',
        record_video: 'true',
        record_network: 'false'
    }],
});

exports.config = crossbrowsertesting;