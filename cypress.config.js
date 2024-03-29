const {defineConfig} = require("cypress");

module.exports = defineConfig({
    projectId: 'kb7tas',
    video: true,
    videosFolder: 'cypress/videos',
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    trashAssetsBeforeRuns: true,
    viewportWidth: 1536,
    viewportHeight: 960,

    e2e: {
        baseUrl: 'https://www.saucedemo.com/',
        defaultCommandTimeout: 5000,
        retries: 1,
        chromeWebSecurity: false,
        setupNodeEvents(on, config) {
            return require('./cypress/plugins/index.js')(on, config)
        },
    },
});
