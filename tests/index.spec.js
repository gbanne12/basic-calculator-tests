// @ts-check
const { test, expect } = require('@playwright/test');
const { IndexPage } = require('../pages/IndexPage');
const { BasicCalculatorPage } = require('../pages/BasicCalculatorPage');



test('Can access the calculator from the index page', async ({ page }) => {
  const indexPage = new IndexPage(page);
  await indexPage.goto();
  await indexPage.clickCalculatorLink();

  const calculatorPage = new BasicCalculatorPage(page);
  expect(await calculatorPage.getPageHeader()).toBe('BASIC CALCULATOR');
});



test('Can view the calculator details on the index page', async ({ page }) => {
  const indexPage = new IndexPage(page);
  await indexPage.goto();
  expect(await indexPage.expectCalculatorAvailable());
});
