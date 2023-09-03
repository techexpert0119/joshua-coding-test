const { convertHTMLToObject } = require('./parseHtml');

document.getElementById('submitButton').addEventListener('click', function() {
  var inputTextarea = document.getElementById('htmlScript');
  var outputDiv = document.getElementById('objectScript');

  var text = inputTextarea.value;
  var htmlJSON = convertHTMLToObject(text);

  outputDiv.value = JSON.stringify(htmlJSON, null, 4);
});
