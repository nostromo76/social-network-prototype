
const BasePage = require('./BasePage');
const {By} = require ("selenium-webdriver")
const utils = require ('../data/utils')
class SignUpPage extends BasePage {
  constructor(driver) {
    super(driver);
  }
    async fillDetails(details) {
      const firstNameInput = await this.find(utils.firstNameInput);
      const lastNameInput = await this.find(utils.lastNameInput);
      const emailInput = await this.find(utils.emailInput);
      const passwordInput = await this.find(utils.passwordInput);
      const maleRadioButton = await this.find(utils.maleRadioButton);
      const dobDay = await this.find(utils.dobDay);
      const dobMonth = await this.find(utils.dobMonth);
      const dobYear = await this.find(utils.dobYear);
      const joinNowButton = await this.find(utils.joinNowButton);
  
      await firstNameInput.sendKeys(details.firstName);
      await lastNameInput.sendKeys(details.lastName);
      await emailInput.sendKeys(details.email);
      await passwordInput.sendKeys(details.password);
      await maleRadioButton.click();
      await dobDay.sendKeys(details.birthday.day);
      await dobMonth.sendKeys(details.birthday.month);
      await dobYear.sendKeys(details.birthday.year);
      await joinNowButton.click();
    }
  }
  
  module.exports = SignUpPage;