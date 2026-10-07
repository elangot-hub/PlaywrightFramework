async function waitForVisible(locator) {
  await locator.waitFor({ state: 'visible' });
}

async function clickElement(locator, options = {}) {
  await waitForVisible(locator);
  await locator.click(options);
}

module.exports = { waitForVisible, clickElement };
