//Http
var http = require('http');
//URL
var url = require('url');
var querystring = require('querystring');

// File
var fs = require('fs');


var server = http.createServer(function (request, response) {

        // url webpage
    	var page = url.parse(request.url).pathname;
    	var params = querystring.parse(url.parse(request.url).query);
    	    	
        console.log(page);

        if ( page == "/index.html" || page == "/index" ){

            loadTemplate(response, page);
            
        }
        else{
             loadTemplate(response, page);
        }


        //var res ;
    	//console.log( params['prenom'] );
        // http://127.0.0.1:8124/index?nom=stringnom&prenom=sebstring
        /*
       if ('prenom' in params && 'nom' in params) 
       	{
             resp = 'Vous vous appelez ' + params['prenom'] + ' ' + params['nom'];
        }
        else 
        {
            resp = 'Vous devez bien avoir un prénom et un nom, non ?';
        }
        response.end(res);
        */

    }).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');


function loadTemplate(_response_http, _page_template){
    console.log("page = "+_page_template);

        fs.readFile('./'+_page_template, function (err, html) {
            if (err) {
                console.log("error");
               _response_http.writeHead(404, {'Content-Type': 'text/plain'});
                _response_http.end("Error");
                //throw err; 
            }  
            else{
                console.log("ok");
                _response_http.writeHead(200, {'Content-Type': 'text/html'});
                _response_http.write(html);
                _response_http.end();
             }   
        });
            

}

function ErrorTemplate(_response_http){

    _response_http.writeHead(404, {'Content-Type': 'text/plain'});
    _response_http.end("Error");
}

