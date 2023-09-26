// Importing necessary functions and variables from the "../../../functions" module using 'const'.
// Using 'const' ensures that these imports remain unchanged throughout the code, meaning
// their values cannot be reassigned or modified accidentally, providing consistency in usage.
import { waitForElementToExist, isDisplayed, isClickable, waitUntilLimitIsChanged, checkTextsInArray, containsTextsInArray, containsText, textEquals, generateString } from './../functions.js';
import { $ } from '@wdio/globals'
import Page from './page.js';
class LoginPage extends Page {
    // Describing get just in case in later on the xpath or css selector changes we don't need to change it everywhere in a project
    // Also it gives a clearer view of that is used for particular function
    // Can easily access variable inside the test for quicker usage same as lets say in JAVA language
    get emailInput() {
        return $("input[placeholder='Email']");
    }

    get nextBtn() {
        return $("button[type='submit']");
    }

    get passwordInput() {
        return $("input[placeholder='Password']");
    }

    get loginBtn() {
        return $("button[type='submit']");
    }    

    get search() {
        return $(".input-group-prepend");
    }
      
    async login (username, password) {
        await browser.maximizeWindow();
        await browser.url(`https://staging.goramp.tech/auth/login`)
        browser.pause(1000)
        await this.emailInput.setValue(username);
        await this.nextBtn.click();
        browser.pause(10000)
        await this.passwordInput.setValue(password);
        browser.pause(10000)
        await this.loginBtn.click();
        }
    
    //  overwrite specific options to adapt it to page object if path will be linked here in the future
    
    open () {
        return super.open();
    }
}
// Exporting a new instance of the LoginPage class for convenient access.
// Exporting an instance allows us to use the class methods and properties without
// creating a new instance elsewhere in our code. This ensures that the class state
// is consistent throughout the application. The instance can also be given a different
// name if needed, providing flexibility in usage.
export default new LoginPage();

