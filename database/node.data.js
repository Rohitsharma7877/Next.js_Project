const nodetopic = [
  {
    heading: `What is Node.js?`,
    content: `
        A common task for a web server can be to open a file on the server and return the content to the client.

    Here is how PHP or ASP handles a file request:

    1.Sends the task to the computer's file system.
    2.Waits while the file system opens and reads the file.
    3.Returns the content to the client.
    4.Ready to handle the next request.
    
    Here is how Node.js handles a file request:

    1.Sends the task to the computer's file system.
    2.Ready to handle the next request.
    3.When the file system has opened and read the file, the server returns the content to the client.
    Node.js eliminates the waiting, and simply continues with the next request.

    Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.
    `,
    video: ``,
    code: `
        var http = require('http');
        http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello World!');
        }).listen(8080);
    `,
  },
  {
    heading: `What is a Module in Node.js?`,
    content: `Consider modules to be the same as JavaScript libraries.

        A set of functions you want to include in your application.
        
        `,
    video: ``,
    code: `var http = require('http');
    var dt = require('./myfirstmodule');
    
    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write("The date and time are currently: " + dt.myDateTime());
      res.end();
    }).listen(8080);`,
  },
  {
    heading: `Node.js as a File Server`,
    content: `The Node.js file system module allows you to work with the file system on your computer.

        To include the File System module, use the require() method:
        Common use for the File System module:

        Read files
        Create files
        Update files
        Delete files
        Rename files

    `,
    video: ``,
    code: `var http = require('http');
    var fs = require('fs');
    http.createServer(function (req, res) {
      fs.readFile('demofile1.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
    }).listen(8080);`,
  },
  {
    heading: `Node.js Events`,
    content: `Every action on a computer is an event. Like when a connection is made or a file is opened.

        Objects in Node.js can fire events, like the readStream object fires events when opening and closing a file:`,
    video: ``,
    code: `
        var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');`,
  },
  {
    heading: `Node.js Upload Files`,
    content: `There is a very good module for working with file uploads, called "Formidable".

    The Formidable module can be downloaded and installed using NPM:
    Step 1: Create an Upload Form
    Create a Node.js file that writes an HTML form, with an upload field:
    Step 2: Parse the Uploaded File
    Include the Formidable module to be able to parse the uploaded file once it reaches the server.
    
    When the file is uploaded and parsed, it gets placed on a temporary folder on your computer.`,
    video: ``,
    code: `var http = require('http');
    var formidable = require('formidable');
    
    http.createServer(function (req, res) {
      if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
          res.write('File uploaded');
          res.end();
        });
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
      }
    }).listen(8080);`,
  },
  {
    heading: `Node.js HTTP Module`,
    content: `The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.

        Use the createServer() method to create an HTTP server:`,
    video: ``,
    code: `var http = require('http');
    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('Hello World!');
      res.end();
    }).listen(8080);`,
  },
  {
    heading: `Node.js URL Module`,
    content: `The URL module splits up a web address into readable parts.

        To include the URL module, use the require() method:`,
    video: ``,
    code: `var url = require('url');
    var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
    var q = url.parse(adr, true);
    
    console.log(q.host); //returns 'localhost:8080'
    console.log(q.pathname); //returns '/default.htm'
    console.log(q.search); //returns '?year=2017&month=february'
    
    var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
    console.log(qdata.month); //returns 'february'`,
  },
  {
    heading: `Node.js Send an Email`,
    content: `
        The Nodemailer Module
        The Nodemailer module makes it easy to send emails from your computer.
        
        The Nodemailer module can be downloaded and installed using npm:`,
    video: ``,
    code: `The Nodemailer Module
        The Nodemailer module makes it easy to send emails from your computer.
        
        The Nodemailer module can be downloaded and installed using npm:`,
  },
];

export default nodetopic;
