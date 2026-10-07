const base = require('@playwright/test');
const LoginPage = require('../pages/loginpage');
const ProductPage = require('../pages/productpage');

exports.test = base.test.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
});

exports.expect = base.expect;
