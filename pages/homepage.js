class homepage{

    constructor(page) {

        this.page = page;
    }


  

    get bbb() {
        return this.page.locator("//div[@class='inventory_list']//div[1]//div[3]//button[1]")
    }



    async cdrty() {
      

        await this.bbb.click();


    }
}
module.exports = homepage;