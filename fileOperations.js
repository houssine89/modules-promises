const fs = require('fs/promises');

function readFileAsync(filePath, encoding = 'utf-8') {
  return fs.readFile(filePath, encoding);
}

function writeFileAsync(filePath, content) {
  return fs.writeFile(filePath, content)
    .then(() => {
      console.log(`File "${filePath}" successfully written.`);
    })
    .catch((error) => {
      console.error(`Error writing to file "${filePath}": ${error.message}`);
      throw error;
    });
}

module.exports = {
  readFileAsync,
  writeFileAsync,
};
