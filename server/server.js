
const fs = require('fs');
const parse5 = require('parse5');

const { convertDOMToObject, removeLineBreaks } = require('./parseHtml');

const args = process.argv.slice(2);
if (args.length !== 2) {
  console.error('Invalid number of arguments. Usage: node myprogram.html myobject.txt');
  process.exit(1);
}

const htmlFile = args[0];
const objectFile = args[1];

try {
  // Read input data from the HTML file
  const html = fs.readFileSync(htmlFile, 'utf8');
  const fragment = parse5.parseFragment(removeLineBreaks(html)); 

  // Process the input data (convert html to object)
  const result = convertDOMToObject(fragment);

  // Write the object data to the object file
  const objectData = JSON.stringify(result, null, 4);
  fs.writeFileSync(objectFile, objectData)

  console.log(`Data processed and written to output file: ${objectFile}\n`, objectData);
}
catch(error) {
  console.error('An error occurred:', error.message);
}