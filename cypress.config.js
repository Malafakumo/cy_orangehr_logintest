const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/",
    viewportHeight: 938,
    viewportWidth: 1520,
    pageLoadTimeout: 6000,
    defaultCommandTimeout: 10000

  },
});
