const { processFiles } = require('./fileProcessor');

const inputDirectory = 'input_files';
const outputDirectory = 'output_files';

async function main(){
  try {
    await processFiles(inputDirectory, outputDirectory);
    console.log('Main application completed successfully.');
  } catch (error) {
    console.error('An error occured:', error.message);
  }
}

main();



