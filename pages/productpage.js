class productpage {

    constructor(page) {
        this.page = page;
    }

    get car() {


        return this.page.locator("//a[@class='shopping_cart_link fa-layers fa-fw']//*[name()='svg']")
    }


    get gtyu() {
        return this.page.locator("//button[@class='btn_secondary cart_button']")
    }


    async ahh() {


        await this.car.click();

        await this.gtyu.click();
    }












}
module.exports = productpage;