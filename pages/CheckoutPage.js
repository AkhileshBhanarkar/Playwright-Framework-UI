class CheckoutPage {
constructor(page) {
this.page = page;
this.firstName = page.locator('#first-name');
this.lastName = page.locator('#last-name');
this.postalCode = page.locator('#postal-code');
this.continueBtn = page.locator('#continue');
this.finishBtn = page.locator('#finish');
this.successMsg = page.locator('.complete-header');
}
async fillCheckoutDetails(first, last, zip) {
await this.firstName.fill(first);
await this.lastName.fill(last);
await this.postalCode.fill(zip);
await this.continueBtn.click();
}
async finishOrder() {
await this.finishBtn.click();
}
async verifyOrderSuccess() {
await this.successMsg.waitFor();
return await this.successMsg.textContent();
}
}
module.exports = {CheckoutPage};