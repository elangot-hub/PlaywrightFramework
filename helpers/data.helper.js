const fs = require('fs');
const path = require('path');

function loadTestData(fileName) {
  const filePath = path.join(__dirname, '..', 'test-data', fileName);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

module.exports = { loadTestData };
