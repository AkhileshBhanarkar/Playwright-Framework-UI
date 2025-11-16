class HomePage{

    constructor(page){
        this.page = page;
        // this.productTitles = page.locator("[data-test='inventory-item-name']");
        // this.addToCartButton = page.locator("#add-to-cart-sauce-labs-backpack");

        this.productContainer = page.locator('.inventory_item');
        this.cartLink = page.locator('[data-test="shopping-cart-link"]');
        this.cartBadge = page.locator('.shopping_cart_badge');

    }

    // async selectProductAndClickOnCart(productName){
    //     const productCount = await this.productTitles.count();
    //     for(let i=0; i< productCount; i++){
    //         const text = await this.productTitles.nth(i).textContent();
    //         if (text.trim() === productName) {
    //             await products.nth(i).this.addToCartButton.click();
    //         break;
    //     }
    
    //     }
    // }

    // Add product by exact product name
    async addProductToCart(productName) {
    // filter by text and click add-to-cart button inside that container
    await this.productContainer.filter({ hasText: productName }).locator('button[data-test^="add-to-cart"]').click();
    }

    async openCart() {
        await this.cartLink.click();
    }

    async getCartBadgeCount() {
        if (await this.cartBadge.count() === 0) 
            return '0';
        return (await this.cartBadge.textContent()).trim();
    }
 
}

module.exports = { HomePage };