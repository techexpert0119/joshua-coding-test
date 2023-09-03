const parse5 = require('parse5');

// Remove unnecessary line breaks in htmlText
const removeLineBreaks = (str) => {
  return str.replace(/\r?\n/g, '');
}

// Extract style object from attribute
const parseStyle = attr => {
  const styleObject = {}
  const stylePairs = attr.value.split(';').filter(pair => pair.trim() !== '');
  for (const pair of stylePairs) {
    const [property, value] = pair.split(':').map(str => str.trim());
    styleObject[property] = value;
  }
  return styleObject;
}

function parseNode(node) {
  const obj = {
    tag: node.tagName,
  };

  if (node.attrs) {
    for (const attr of node.attrs) {
      if (attr.name === 'style') {
        obj.style = parseStyle(attr);
      } else {
        obj[attr.name] = attr.value;
      }
    }
  }

  if (node.childNodes) {
    for (const childNode of node.childNodes) {
      if (childNode.nodeName === '#text' && childNode.value.trim() !== '') {
        obj.text = childNode.value.trim();
      } 
      else if(childNode.tagName){
        const childObj = parseNode(childNode);
        !obj.children ? (obj.children = [childObj]) : obj.children.push(childObj);
      }
    }
  }
  return obj;
}

function convertHTMLToObject(html) {
  const fragment = parse5.parseFragment(removeLineBreaks(html));  
  const rootNode = fragment.childNodes[0];
  return parseNode(rootNode);
}

module.exports = { convertHTMLToObject, removeLineBreaks };
