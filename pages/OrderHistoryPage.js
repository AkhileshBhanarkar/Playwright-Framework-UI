class OrderHistoryPage {
constructor(page) {
this.page = page;
this.backHomeBtn = page.locator('#back-to-products');
}
async goBackHome() {
await this.backHomeBtn.click();
}
}
module.exports = {OrderHistoryPage};