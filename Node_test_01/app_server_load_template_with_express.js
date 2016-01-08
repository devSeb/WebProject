var express = require('express');
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();

app.get('/', function (request, response){
	response.setHeader('Content-Type','text/plain');
	response.end('accueil');
});

app.get('/index', function (request, response){
	response.setHeader('Content-Type','text/plain');
	response.end('index');
});

// dynamic url
app.get('/etage/:etagenum/chambre', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes à la chambre de l\'étage n°' + req.params.etagenum);
});

// dynamic url , Use express with the ejs view
app.get('/etage/:etagenum/chambree', function(req, res) {
    res.render('chambre.ejs', {etage: req.params.etagenum});
});

app.get('/compter/:nombre', function(req, res) {
    var noms = ['Robert', 'Jacques', 'David'];
    res.render('page.ejs', {compteur: req.params.nombre, noms: noms});
});





var todolist = ['Faire les courses', 'Nourrir le chat'];

app.get('/exo1/index', function(request,response){
	response.render('todolist.ejs',{todolist: todolist});
	//response.redirect('todolist.ejs');
});

app.get('/exo1/index/delete/:numId', function(request,response){
	var id = request.params.numId;
	delete todolist[id];
	//response.render('todolist.ejs',{todolist: todolist});
	response.redirect('/exo1/index');
});

app.post('/exo1/index/add/', urlencodedParser , function(request,response){	
	console.log(request.body.element);
	if (!request.body) return response.sendStatus(400)
	{
 		//response.send('welcome, ' + request.body.element);
 		todolist.push(request.body.element);
	}
	//response.render('todolist.ejs',{todolist: todolist});
	response.redirect('/exo1/index');
});



//404
app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
   // res.send(404, 'Page introuvable !');
    res.status(404).send('page introuvable');
});


app.listen(8080);