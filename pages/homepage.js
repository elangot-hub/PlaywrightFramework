class HomePage {
  constructor(page) {
    this.page = page;
    this.productsTitle = page.locator('.title');
  }

  async isLoaded() {
    await this.productsTitle.waitFor();
  }
}

module.exports = HomePage;
