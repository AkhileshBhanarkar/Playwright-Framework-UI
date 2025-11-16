const { test, expect } = require('@playwright/test');
const { PageObject } = require('../pageObjects/PageObject');
const dataset = JSON.parse(JSON.stringify(require('../utils/PlaceOrderTestData.json')));

for (const data of dataset) {
    test(`@Regression Complete order flow for '${data.productName}`, async ({ page }) => {
        const pageobject = new PageObject(page);
        await pageobject.getLoginPage().goToLoginPage('https://www.saucedemo.com/');
        await pageobject.getLoginPage().login(data.username, data.password);
        await pageobject.getHomePage().addProductToCart(data.productName);
        await pageobject.getOrdersPage().goToCart();
        await pageobject.getOrdersPage().proceedToCheckout();
        await pageobject.getCheckoutPage().fillCheckoutDetails(data.firstName, data.lastName, data.postalCode);
        await pageobject.getCheckoutPage().finishOrder();
        const msg = await pageobject.getCheckoutPage().verifyOrderSuccess();
        expect(msg).toContain('Thank you');
        await pageobject.getOrderHistoryPage().goBackHome();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });
}