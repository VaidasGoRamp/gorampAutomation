import { waitForElementToExist, isDisplayed, isClickable, waitUntilLimitIsChanged, checkTextsInArray, containsTextsInArray, containsText, textEquals, generateString } from './../functions.js';
import { $ } from '@wdio/globals'
import Page from './page.js';
class UnplannedOrders extends Page {

    get OrdersBtn() {
        return $(".btn.btn.btn-link.btn-link[href='/app/company-orders/create']");
    }

    get orderNumber() {
        return $('//label[text()="Order No."]//following-sibling::input');
    }

    get warehouse() {
        return $("(//button[contains(text(),'Warehouse')])[1]");
    }

    get warehouseSelection() {
        return $("(//div[@class='select-container form-control select-searchable'])[1]");
    }

    get unloadWarehouse() {
        return $("(//button[contains(text(),'Warehouse')])[2]");
    }

    get firstSelect() {
        return $("div[class='select-options'] div:nth-child(2)");
    }

    get unloadWarehouseSelection() {
        return $("(//div[@class='select-container form-control select-searchable'])[2]");
    }

    get secondSelect() {
        return $("div[class='select-options'] div:nth-child(3)");
    }

    get publish() {
        return $("//button[contains(text(),'Publish')]");
    }

    async orders (country, number, loadAddress, unlodingAdd) {
        await browser.url("https://staging.goramp.tech/app/company-orders/list")
        await isClickable(this.OrdersBtn, 50000);
        await this.OrdersBtn.click()
        await await this.orderNumber.setValue(number);
        await this.warehouse.click();
        await this.warehouseSelection.click();
        await this.firstSelect.click();
        await this.unloadWarehouse.click();
        await this.unloadWarehouseSelection.click();
        await this.secondSelect.click();
        await this.publish.click();
    }
    
    open () {
        return super.open();
    }
}

export default new UnplannedOrders();

