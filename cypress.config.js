const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video:true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

  
    viewPortHeight: 1000,
    viewportWidth: 1050,
    experimentalStudio: true
  },
});
