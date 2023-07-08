
class BasePage  {
    constructor(driver) {
        this.driver = driver
    }
    async visit(url) {
        await this.driver.get(url);

    }
    async getTitle() {
        return await  this.driver.getTitle();
    }

    async find(locator) {
        return this.driver.findElement(locator);
      }
      async click(locator) {
        // await (await this.find(locator)).click()
        const el = await this.find(locator);
        await el.click();
      }




}
module.exports = BasePage