import { expect } from '@wdio/globals'
import UnplannedOrders from '../classes/unplannedOrders.js'
import LoginPage from '../classes/login.js'
import * as functions from './../functions.js';



describe('My Login application', function(){
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('25853@goramp.dev', 'Labas123!!!');
        await browser.pause(4000)

        // Add an assertion to check if a welcome message is displayed
        await functions.checkUrl('https://staging.goramp.tech/app/shipments/list');
    });
});


describe('Create order', () => {
    it('should create order', async () => {
        let numberCheck = (await functions.generateString(5)).toString();
        await UnplannedOrders.orders("Lithuania", numberCheck, functions.generateString(7).toString(), functions.generateString(5).toString());
        // After creating the order we wait to make sure order list is uploaded
        const firstSpan = await browser.$(`tbody tr:nth-child(1) td:nth-child(2) span:nth-child(1)`);
        await functions.waitForElementToExist(firstSpan, 6000);
        // Get first five orders texts in case somoeone else create dthe order while executing the test
        const spans = [];
        for (let i = 1; i <= 5; i++) {
            const element = await browser.$(`tbody tr:nth-child(${i}) td:nth-child(2) span:nth-child(1)`);
            const text = await element.getText();
            spans.push(text);
        }
        // Numbet check is our text passed as order numberCheck, function to check if it the same as created
        functions.checkTextsInArray(spans, numberCheck)
    });
});


