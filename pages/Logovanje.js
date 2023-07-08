const BasePage = require('./BasePage');
const { By } = require("selenium-webdriver")
const utils = require('../data/utils')
class Logovanje extends BasePage {
    constructor(driver) {
        super(driver);
    }
    async loginDetails(details) {
        const emailInput = await this.find(utils.emailInput);
        const passwordInput = await this.find(utils.passwordInput);
        const loginButton = await this.find(utils.joinNowButton);
        await loginButton.click();
    }
}

module.exports = Logovanje;