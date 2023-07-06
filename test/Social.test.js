const { Builder } = require('selenium-webdriver');
require('dotenv').config();
const assert = require('assert');
const path = require('path');
const SocialNetwork = require('../pages/BasePage.js');
const relativePath = "../index.html";
const absoluteFilePath = path.resolve(__dirname, relativePath);
const fileUrl = `file://${absoluteFilePath}`;

describe('Test Social Network Page', async function () {
  let driver;
  let socialNetwork;

  beforeEach('Open Social Network prototype', async function () {
      driver = new Builder().forBrowser(process.env.USE_BROWSER).build();
      socialNetwork = new SocialNetwork(driver);
      await socialNetwork.visit(fileUrl);
  });

  afterEach('Close browser', async function () {
      await driver.quit();
  });

  it('Open page', async function () {
      // Test the page title
      await assert.equal(await socialNetwork.getTitle(), "homaj"
      );
  });
});