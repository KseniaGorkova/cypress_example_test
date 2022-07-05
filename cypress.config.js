const { defineConfig } = require("cypress");

module.exports = defineConfig(
  {
    chromeWebSecurity: false,

    e2e: {
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
    },
  },

  {
    component: {
      devServer(cypressConfig) {
        // return dev server instance or a promise that resolves to
        // a dev server instance here
      },
    },
  }
);
