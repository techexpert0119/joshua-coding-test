# Simple Code Text

The test is about build the JavaScript node program which converts HTML to Object value.
I use "parse5" node module to parse DOM elements from HTML string. The program runs from the both CLI by reading a file and browser by textarea input.

### 1. CLI by reading a file
In "Server" folder,
- Run "npm install" command to download node modules.
- Run "npm start" command on the cmd.

It runs "node server.js myprogram.html myobject.txt" command. It read HTML from myprogram.html to convert into the object value, and then output the result object to myobject.txt as a text.

So, you can see the result in myobject.txt and it will also displayed on cmd console.

### 2. Browser by text input-frontend
In "frontend" folder,
- Run "npm install" command to donwload node modules.
- Run "npm start" command on the cmd.
