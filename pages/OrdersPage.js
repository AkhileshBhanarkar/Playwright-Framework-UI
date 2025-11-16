class OrdersPage {
constructor(page) {
this.page = page;
this.cartBtn = page.locator('#shopping_cart_container a');
this.checkoutBtn = page.locator('#checkout');
}
async goToCart() {
await this.cartBtn.click();
}
async proceedToCheckout() {
await this.checkoutBtn.click();
}
}
module.exports = {OrdersPage};