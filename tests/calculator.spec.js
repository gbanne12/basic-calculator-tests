import { test, expect } from '@playwright/test';
const { BasicCalculatorPage } = require('../pages/BasicCalculatorPage');

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  const calculatorPage = new BasicCalculatorPage(page);
  await calculatorPage.goto();
})

test('Can use calculator to perform a whole number addition', async ({ page }) => {
  let inputOne = '14'
  let inputTwo = '22';
  let expectedAnswer = '36';

  const calculatorPage = new BasicCalculatorPage(page);
  await calculatorPage.inputNumbers(inputOne, inputTwo);
  await calculatorPage.selectAddition();
  await calculatorPage.calculate();

  expectValueToBe(expectedAnswer, page);
})

test('Can use calculator to perform a whole number subtraction', async ({ page }) => {
  let inputOne = '123'
  let inputTwo = '24';
  let expectedAnswer = '99';

  const calculatorPage = new BasicCalculatorPage(page);
  await calculatorPage.inputNumbers(inputOne, inputTwo);
  await calculatorPage.selectSubtraction();
  await calculatorPage.calculate();

  expectValueToBe(expectedAnswer, page);
})

test('Can use calculator to performs a whole number multiplication', async ({ page }) => {
  let inputOne = '12'
  let inputTwo = '10';
  let expectedAnswer = '120';

  const calculatorPage = new BasicCalculatorPage(page);
  await calculatorPage.inputNumbers(inputOne, inputTwo);
  await calculatorPage.selectMultiplication();
  await calculatorPage.calculate();

  expectValueToBe(expectedAnswer, page);
})

test('Can use calculator to perform a whole number division', async ({ page }) => {
  let inputOne = '10'
  let inputTwo = '5';
  let expectedAnswer = '2';

  const calculatorPage = new BasicCalculatorPage(page);
  await calculatorPage.inputNumbers(inputOne, inputTwo);
  await calculatorPage.selectDivision();
  await calculatorPage.calculate();

  expectValueToBe(expectedAnswer, page);
})


async function expectValueToBe(expectedValue, page) {
  const calculatorPage = new BasicCalculatorPage(page);
  const answerFieldValue = await calculatorPage.getAnswerValue();
  expect(answerFieldValue).toBe(expectedValue);
}
