http = require('http');
fs = require('fs');
path = '/Users/fernandogorodscy/Desktop/Forum.git';

PORT = 30930;

STATIC_PREFIX = '/static/';

MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.txt': 'text/plain'
};

http.createServer(function(request, response) {
  console.log('Request: ' + request.url);
  if (request.url == '/') {  
    
    fs = require('fs')
    fs.readFile(path+'/index.html', 'utf8', function (err,data) {
  		if (err) {
    		return console.log(err);
  		}
  		console.log(data);
  		response.write(data);
  		response.end();
  
	});
    
  } else if (request.url.indexOf(STATIC_PREFIX) == 0) {

	fs = require('fs')
	fs.readFile(path+request.url, 'utf8', function (err,data) {
  		if (err) {
    		return console.log(err);
  		}
  		console.log(data);
  		response.write(data);
  		response.end();
	});

  } else if (request.url == '/style.css') {
    // TASK C2:
    // Serve the file for the user from the current directory. For instance,
    // for /static/foo.html, you sould server foo.html from the current
    // directory.

	fs = require('fs')
	fs.readFile(path+ '/style.css', 'utf8', function (err,data) {
  		if (err) {
    		return console.log(err);
		}
		console.log(data);
		response.write(data);
		response.end();
	});

 } else if (request.url == '/topics') {
// open JSON file

fs = require('fs')
fs.readFile(path+'/items.json', 'utf8', function (err,data) {
  	if (err) {
    	return console.log(err);
  	}

	response.end(data);
});

 } else if (request.url == '/topics') {
// open JSON file

	fs = require('fs')
	fs.readFile(path+'/style.css', 'utf8', function (err,data) {
  		if (err) {
    		return console.log(err);
  		}

		response.end(data);

	});

 } else {

	fs = require('fs')
	fs.readFile(path+'/404.html', 'utf8', function (err,data) {
  		if (err) {
    		return console.log(err);
  		}
  	console.log(data);
  	response.write(data);
  	response.end();
  
	})

  }
  
}).listen(PORT);



console.log('Server running at http://127.0.0.1:' + PORT + '/');