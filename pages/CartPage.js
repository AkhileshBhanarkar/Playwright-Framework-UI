class CartPage {
constructor(page) {
this.page = page;
this.cartItems = page.locator('.cart_item');
this.checkoutBtn = page.locator('[data-test="checkout"]');
}
async getCartItemsCount() {
return await this.cartItems.count();
}
async proceedToCheckout() {
await this.checkoutBtn.click();
}
}
module.exports = { CartPage };
