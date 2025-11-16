const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { OrdersPage } = require('../pages/OrdersPage');
const { OrderHistoryPage } = require('../pages/OrderHistoryPage');

class PageObject {

    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.homePage = new HomePage(this.page);
        this.cartPage = new CartPage(this.page);
        this.ordersPage = new OrdersPage(this.page);
        this.checkoutPage = new CheckoutPage(this.page);
        this.orderHistoryPage = new OrderHistoryPage(this.page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getHomePage() {
        return this.homePage;
    }

    getCartPage() {
        return this.cartPage;
    }

    getOrdersPage() {
        return this.ordersPage;
    }

    getCheckoutPage() {
        return this.checkoutPage;
    }

    getOrderHistoryPage() {
        return this.orderHistoryPage;
    }

}

module.exports = { PageObject };