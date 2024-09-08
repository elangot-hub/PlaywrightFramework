// @ts-check
const { test, expect } = require('@playwright/test');
const LoginPage = require("../pages/loginpage")
const HomePage = require("../pages/homepage")
const ProductPage = require("../pages/productpage")


test('login application', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/v1/');

    const loginpage = new LoginPage(page);
    
    await loginpage.loginapplication("standard_user", "secret_sauce");

    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    await page.waitForTimeout(3000);
    
   
    // Expect a title "to contain" a substring.
   // await expect(page).toHaveTitle(/Playwright/);


});

test('login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');

    const loginpage = new LoginPage(page);

    await loginpage.loginapplication("standard_user", "secret_sauce");
   
    const hop = new HomePage(page);

    await hop.cdrty();

    


});

test('login pppp', async ({ page }) => {
   

});