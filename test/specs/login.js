const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const LoginCredentials= require('../../Resources/Secrets/oLogin.js')

describe('Login to Secure area', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(LoginCredentials.oGoodDetails);

        await expect(SecurePage.flashAlert).toBeExisting();

        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});

describe('Fail to login to Secure area', () => {
    it('should fail login with invalid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(LoginCredentials.oBadDetails);

        await expect(LoginPage.flash).toBeExisting();
        await expect(LoginPage.flash).toHaveTextContaining(
            'Your username is invalid!');
    });
});
