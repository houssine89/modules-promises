const fs = require('fs/promises');
const path = require('path');
const { writeFileAsync } = require('./fileOperations');
async function processFiles(inputDirectory, outputDirectory) {
  try {
    const files = await fs.readdir(inputDirectory);
    await fs.mkdir(outputDirectory, { recursive: true });
    for (const file of files) {
      const inputFilePath = path.join(inputDirectory, file);
      const outputFilePath = path.join(outputDirectory, `modified_${file}`);
      const content = await fs.readFile(inputFilePath, 'utf-8');
      const modifiedContent = `${content}\nModified at: ${new Date().toLocaleString()}`;
      await writeFileAsync(outputFilePath, modifiedContent);
    }
    console.log('Processing complete.');
  } catch (error) {
    console.error('An error occurred during file processing:', error.message);
    throw error;
  }
}
module.exports = {
  processFiles,
};
