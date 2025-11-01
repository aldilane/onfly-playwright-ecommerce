const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/specs',
  timeout: 30000,
  retries: 1,
  reporter: [['html', { outputFolder: 'report' }]],
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://www.saucedemo.com/',
  },
});
