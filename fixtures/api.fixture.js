const base = require('@playwright/test');
const ApiClient = require('../api/apiClient');

exports.test = base.test.extend({
  apiClient: async ({ request }, use) => {
    await use(new ApiClient(request));
  },
});

exports.expect = base.expect;
