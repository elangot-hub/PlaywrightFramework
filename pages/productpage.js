const { clickElement } = require('../helpers/common.helper');

class ProductPage {
  constructor(page) {
    this.page = page;
    this.inventoryItems = page.locator('[data-test="inventory-item"]');
    this.hamburgerMenuButton = page.locator('#react-burger-menu-btn');
    this.closehamburgerbutton =page.locator('#react-burger-cross-btn');
    this.productfilter = page.locator('select.product_sort_container');
  }

  async getProducts() {
    await this.inventoryItems.first().waitFor({ state: 'visible' });

    const count = await this.inventoryItems.count();
    const products = [];

    for (let i = 0; i < count; i++) {
      const item = this.inventoryItems.nth(i);
      const name = (await item.locator('.inventory_item_name').textContent())?.trim();
      const price = (await item.locator('.inventory_item_price').textContent())?.trim();

      products.push({ name, price });
    }

    return products;
  }

  async openHamburgerMenu() {
    await clickElement(this.hamburgerMenuButton);
  }
  async closeHamburgerMenu(){
    await clickElement(this.closehamburgerbutton);
  }
  async selectProductFilter(option) {
    await clickElement(this.productfilter);

    if (option) {
      await this.productfilter.selectOption({ label: option });
    }
  }


}

module.exports = ProductPage;
