async function expectOk(response) {
  if (!response.ok()) {
    throw new Error(`API request failed: ${response.status()} ${response.statusText()}`);
  }
}

module.exports = { expectOk };
