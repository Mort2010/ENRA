

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get flash () {
        return $('#flash')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (oLoginDetails) {
        await this.inputUsername.setValue(oLoginDetails.username);
        await this.inputPassword.setValue(oLoginDetails.password);
        await this.btnSubmit.click();
    }

    async errorCheck (sError){
        return this.flash;
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
