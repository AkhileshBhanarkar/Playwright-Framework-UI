const { test, expect } = require('@playwright/test');
const { PageObject } = require('../pageObjects/PageObject');

test('@Smoke Valid Login Test', async ({ page }) => {

    const pageObject = new PageObject(page);
    const url = 'https://www.saucedemo.com/';
    const username = 'standard_user';
    const password = 'secret_sauce';

    const loginPage = pageObject.getLoginPage();
    loginPage.goToLoginPage(url);
    await loginPage.login(username, password);

    await expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
});

test('Invalid Login Test', async ({ page }) => {

    const pageObject = new PageObject(page);
    const url = 'https://www.saucedemo.com/';
    const username = 'invalid_user';
    const password = 'invalid_password';

    const loginPage = pageObject.getLoginPage();
    loginPage.goToLoginPage(url);
    await loginPage.login(username, password);
    const errorMessage = loginPage.errorMessage;

    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
});



