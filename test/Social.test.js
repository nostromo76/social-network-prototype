const { Builder, By } = require('selenium-webdriver');

require('dotenv').config();
const assert = require('assert');
const path = require('path');
const SocialNetwork = require('../pages/BasePage');
const SignUpPage = require('../pages/SignUpPage');
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

    it('Test page title', async function () {

        await assert.equal(await socialNetwork.getTitle(), "homaj"
        );
    });
    it('Test displayed logo', async function () {
        await socialNetwork.visit(fileUrl)
        const logo = await driver.findElement(By.className('logoletter'));
        const isDisplayed = await logo.isDisplayed();
        assert.equal(isDisplayed, true, 'homaj');

    })

    it('can sign up with valid details', async function () {
        const blahblah = new SignUpPage(driver);

        await socialNetwork.visit(fileUrl);
        await blahblah.fillDetails({
            firstName: 'Pera',
            lastName: 'Peric',
            email: 'Pera@example.com',
            password: 'password123',
            gender: 'Male',
            birthday: {
                day: 1,
                month: 'Jan',
                year: 2000
            }
        });

    })

})
