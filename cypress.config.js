const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video:true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewPortHeight: 550,
    viewportWidth: 660,
    experimentalStudio: true
  },
});
