const config = ({
  testDir: './tests',
  retries: 1,
  workers: 2,
  timeout: 40 * 1000,
  expect: {
    timeout: 5000
  },
  reporter: 'html',
  use: {
    headless: true,   // IMPORTANT FOR CI
    launchOptions: {
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    }
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        headless: true,
        screenshot: 'on',
        video: 'on-first-retry',
        ignoreHTTPSErrors: true,
        trace: 'retain-on-failure',
      }
    },
    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
        headless: true,
        screenshot: 'on-failure',
        video: 'on-first-retry',
        ignoreHTTPSErrors: true,
        trace: 'retain-on-failure',
      }
    }
  ],

});

module.exports = config;

