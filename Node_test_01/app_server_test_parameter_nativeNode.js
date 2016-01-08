var http = require('http');
var url = require('url');
var querystring = require('querystring');
var EventEmitter = require('events').EventEmitter;

// init event
var jeu = new EventEmitter();

var server = http.createServer(function (request, response) {

	//var page = url.parse(request.url).pathname;
	var query = url.parse(request.url).query;

	 var params = querystring.parse(url.parse(request.url).query);
	response.writeHead(200, {'Content-Type': 'text/plain'});

	var res ;
	console.log( params['prenom'] );
// http://127.0.0.1:8124/index?nom=stringnom&prenom=sebstring
   if ('prenom' in params && 'nom' in params) 
   	{
         resp = 'Vous vous appelez ' + params['prenom'] + ' ' + params['nom'];
    }
    else 
    {
    	jeu.emit('gameover','perdu');
        resp = 'Vous devez bien avoir un prénom et un nom, non ?';
    }
    response.end(res);
    

});



server.on('close', function(){
	console.log("bye bye");
});


// event 
jeu.on('gameover', function(message){
	console.log(message);
});
server.listen(8124);
//server.close();
console.log('Server running at http://127.0.0.1:8124/');