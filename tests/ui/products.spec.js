const { test, expect } = require('../../fixtures/test.fixture');
const productData = require('../../test-data/products.json');
const userData = require('../../test-data/users.json');

test.beforeEach(async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login(userData.valid_user.username, userData.valid_user.password);
});

test('user can log in to the product page', async ({ page }) => {
  await expect(page).toHaveURL(/inventory/);
});

test('validating the product names and prices', async ({ productPage }) => {
  const products = await productPage.getProducts();
  const expectedProducts = [
    { name: productData.backpack.name, price: `$${productData.backpack.price.toFixed(2)}` },
    { name: productData.bike_light.name, price: `$${productData.bike_light.price.toFixed(2)}` },
    { name: productData.bolt_t_shirt.name, price: `$${productData.bolt_t_shirt.price.toFixed(2)}` },
    { name: productData.fleece_jacket.name, price: `$${productData.fleece_jacket.price.toFixed(2)}` },
    { name: productData.onesie.name, price: `$${productData.onesie.price.toFixed(2)}` },
    { name: productData.red_t_shirt.name, price: `$${productData.red_t_shirt.price.toFixed(2)}` },
  ];

  expect(products).toEqual(expect.arrayContaining(expectedProducts));
});

test('user can open the hamburger menu', async ({ productPage }) => {
  await productPage.openHamburgerMenu();
});

test('User click on the hamburger menu and close it', async ({ productPage }) => {
  await productPage.openHamburgerMenu();
  await productPage.closeHamburgerMenu();
});

test('user click on the product filter dropdown ', async({productPage})=>{
    await productPage.selectProductFilter();
    await productPage.page.waitForTimeout(2000);
    await productPage.selectProductFilter('Price (low to high)');
    await productPage.page.waitForTimeout(2000);
    await productPage.selectProductFilter('Name (Z to A)');

    
})