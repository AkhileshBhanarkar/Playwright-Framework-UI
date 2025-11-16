class LoginPage{

    constructor(page){
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async goToLoginPage(url){
        await this.page.goto(url);
    }

    async login(username, password){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        // await this.page.waitForLoadState("networkidle");
    }

    async getErrorMessage(){
        return await this.errorMessage.textContent();
    }
}

module.exports = { LoginPage };