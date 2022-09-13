// playwright-dev-page.js
const { expect } = require('@playwright/test');


exports.BasicCalculatorPage = class BasicCalculatorPage {


  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.firstNumber = page.locator('input[name="number1"]');
    this.secondNumber = page.locator('input[name="number2"]');
    this.operationSelect = page.locator('select[name="selectOperation"]');
    this.calculateButton = page.locator('input:has-text("Calculate")');
    this.header = page.locator('div .intro-heading', { hasText: 'Basic Calculator' });
  }

  // Values for the operation select list
  addition = '0'
  subtraction = '1'
  multiplication = '2'
  division = '3';

  async goto() {
    await this.page.goto('https://testsheepnz.github.io/BasicCalculator.html');
  }

  async inputNumbers(a, b) {
    await this.firstNumber.click();
    await this.firstNumber.fill(a);

    await this.secondNumber.click();
    await this.secondNumber.fill(b);
  }

  async selectAddition() {
    await this.operationSelect.selectOption(this.addition);
  }

  async selectSubtraction() {
    await this.operationSelect.selectOption(this.subtraction);
  }

  async selectMultiplication() {
    await this.operationSelect.selectOption(this.multiplication);
  }

  async selectDivision() {
    await this.operationSelect.selectOption(this.division);
  }

  async calculate() {
    await this.calculateButton.click();
  }

  async getAnswerValue() {
    const answerField = await this.page.inputValue('#numberAnswerField');
    return answerField;
  }

  async getPageHeader() {
    return await this.header.innerText();
  }

}
