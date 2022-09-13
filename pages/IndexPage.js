// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.IndexPage = class IndexPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.basicCalculatorLink = page.locator('#gotoBasicCalc');
    this.basicCalcultorCaption = page.locator('div h4', { hasText: 'Basic Calculator' });
    this.basciCalculatorHeader = page.locator('div p', { hasText: 'A basic page to practice your test automation'});
  }

  async goto() {
    await this.page.goto('https://testsheepnz.github.io/index.html');
  }

  async clickCalculatorLink() {
    await this.basicCalculatorLink.click();
  }

  async expectCalculatorAvailable() {
    await expect(this.basciCalculatorHeader.isVisible());
    await expect(this.basicCalcultorCaption.isVisible());
  }
}