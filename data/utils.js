const {By} = require ("selenium-webdriver")
const utils = {
    firstNameInput: By.id('fname'),
    lastNameInput: By.id('lname'),
    emailInput: By.id('emailadd'),
    passwordInput: By.id('pwd'),
    maleRadioButton: By.css('[for="male"]'),
    dobDay: By.id('date'),
    dobMonth: By.css('[name="month"]'),
    dobYear: By.css('[name="year"]'),
    joinNowButton: By.id('joinnowbttn'),
    
    }
    
    module.exports = utils

    