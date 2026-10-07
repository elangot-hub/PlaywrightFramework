const { test, expect } = require('../../fixtures/test.fixture');
const tdata = require('../../test-data/users.json');
test('User with valid  log in', async ({ page, loginPage }) => {
  await loginPage.goto();
  await loginPage.login(tdata.valid_user.username, tdata.valid_user.password);
  await expect(page).toHaveURL(/inventory/);
});

test('User with invalid login',async ({ page, loginPage }) => {
  await loginPage.goto();
  await loginPage.login(tdata.invalid_user.username, tdata.invalid_user.password);
  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
})

test('User with null login',async ({ page, loginPage }) => {
  await loginPage.goto();
  await loginPage.login(tdata.null_user.username, tdata.null_user.password);
  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username is required');
})