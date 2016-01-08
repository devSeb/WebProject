var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();

 // Test json
app.get('/json', function(request,response){
	
	//response.setHeader('Content-Type','text/plain');
	//response.end(list.toString());
	response.setHeader('Content-Type','application/json');
	response.send(JSON.stringify([
			  {
			    "id": 0,
			    "name": "ISOLOGIX",
			    "content": "Anim anim veniam commodo ut ipsum enim irure dolore velit irure eiusmod ad quis tempor.",
			    "comments": [
			      {
			        "username": "Wilma",
			        "city": "Chical",
			        "email": "wilmagutierrez@isologix.com",
			        "content": "Amet ea tempor officia aliquip ad sunt do fugiat sit. Laboris incididunt sit do ullamco dolor irure tempor velit deserunt ipsum minim ad. Consectetur anim pariatur esse anim laborum voluptate ut ipsum."
			      }
			    ]
			  },
			  {
			    "id": 1,
			    "name": "BEADZZA",
			    "content": "Aliquip nisi Lorem mollit Lorem ex et proident.",
			    "comments": [
			      {
			        "username": "Dale",
			        "city": "Fairacres",
			        "email": "dalegutierrez@beadzza.com",
			        "content": "Laboris amet deserunt labore quis consectetur. Non tempor mollit ut tempor irure. Reprehenderit sint pariatur voluptate adipisicing sunt tempor enim irure ea est dolor et laboris."
			      }
			    ]
			  },
			  {
			    "id": 2,
			    "name": "GLUID",
			    "content": "Quis ullamco qui velit velit sit consequat dolor ullamco reprehenderit sint enim commodo culpa quis.",
			    "comments": [
			      {
			        "username": "Lacey",
			        "city": "Urbana",
			        "email": "laceygutierrez@gluid.com",
			        "content": "Adipisicing non consectetur sit reprehenderit nisi culpa aliqua enim non Lorem proident. Excepteur cupidatat velit ad excepteur anim duis dolore commodo ea duis esse. Ea ad amet proident id sint fugiat duis proident qui eiusmod consequat id."
			      },
			      {
			        "username": "Olivia",
			        "city": "Marion",
			        "email": "oliviagutierrez@gluid.com",
			        "content": "Sunt ut amet incididunt mollit dolor pariatur nisi fugiat adipisicing reprehenderit nostrud minim anim irure. Sunt excepteur est culpa eu ea quis non nostrud nostrud cillum deserunt. Incididunt aliqua laborum proident consectetur et aliquip aliqua et aute esse velit eu officia irure."
			      }
			    ]
			  },
			  {
			    "id": 3,
			    "name": "DADABASE",
			    "content": "Nulla pariatur do dolor laborum.",
			    "comments": [
			      {
			        "username": "Dunlap",
			        "city": "Fowlerville",
			        "email": "dunlapgutierrez@dadabase.com",
			        "content": "Laborum dolore sit veniam elit deserunt Lorem voluptate minim magna voluptate. Laboris esse proident qui officia velit ullamco ad esse irure quis fugiat amet. Dolor incididunt magna mollit magna deserunt ad dolor fugiat mollit et."
			      },
			      {
			        "username": "Mclean",
			        "city": "Linganore",
			        "email": "mcleangutierrez@dadabase.com",
			        "content": "Commodo fugiat et reprehenderit pariatur elit excepteur excepteur veniam fugiat. Exercitation fugiat labore irure aliquip cupidatat ea cillum. Dolor est esse magna fugiat ex amet nostrud ex voluptate."
			      },
			      {
			        "username": "Contreras",
			        "city": "Zeba",
			        "email": "contrerasgutierrez@dadabase.com",
			        "content": "Laboris enim tempor amet sint. Incididunt irure commodo excepteur nisi. Officia et deserunt quis reprehenderit occaecat elit ullamco excepteur sit enim laborum exercitation qui aute."
			      }
			    ]
			  },
			  {
			    "id": 4,
			    "name": "CANOPOLY",
			    "content": "In fugiat laboris qui adipisicing.",
			    "comments": [
			      {
			        "username": "Yates",
			        "city": "Veguita",
			        "email": "yatesgutierrez@canopoly.com",
			        "content": "Consequat do nulla elit pariatur sint aliqua amet ad. Sint velit sint proident aliqua quis enim anim deserunt laborum consectetur. Enim amet voluptate aliquip ipsum do cupidatat."
			      }
			    ]
			  },
			  {
			    "id": 5,
			    "name": "PROGENEX",
			    "content": "Excepteur labore adipisicing eu minim voluptate aliqua magna eu nisi laboris ut do veniam labore.",
			    "comments": [
			      {
			        "username": "Lorna",
			        "city": "Haring",
			        "email": "lornagutierrez@progenex.com",
			        "content": "Non irure sunt qui anim ipsum quis est nostrud nulla aute nulla sint veniam. Id aute tempor quis officia consectetur commodo commodo proident minim laboris id exercitation esse culpa. Culpa duis deserunt amet enim in velit deserunt et cillum incididunt eiusmod."
			      },
			      {
			        "username": "Hollie",
			        "city": "Sunnyside",
			        "email": "holliegutierrez@progenex.com",
			        "content": "Laborum dolor proident anim proident laboris sit Lorem irure culpa Lorem sint commodo. Sint aliqua ipsum do excepteur Lorem. Duis sunt consectetur quis voluptate labore minim cillum incididunt Lorem irure magna eiusmod occaecat sunt."
			      }
			    ]
			  },
			  {
			    "id": 6,
			    "name": "VINCH",
			    "content": "Eu occaecat eiusmod quis commodo incididunt cupidatat nulla labore.",
			    "comments": [
			      {
			        "username": "Velez",
			        "city": "Evergreen",
			        "email": "velezgutierrez@vinch.com",
			        "content": "Anim culpa eu id sint fugiat deserunt. Sint occaecat non nulla deserunt ad qui qui mollit velit culpa nisi occaecat. Dolor eu veniam commodo magna enim sint fugiat consectetur."
			      },
			      {
			        "username": "Leblanc",
			        "city": "Loretto",
			        "email": "leblancgutierrez@vinch.com",
			        "content": "Ad eiusmod mollit adipisicing non eiusmod in culpa sint id ullamco ullamco tempor sit occaecat. Nisi Lorem elit anim laborum eiusmod irure irure et aliquip cillum nisi eiusmod sint non. Velit aliquip minim aliquip cupidatat consectetur magna aliquip minim ut irure."
			      }
				]
			  }
		]));
});
// begin ( use the mapping angular)
app.get('/', function(request, response){
	response.render('index.ejs');
});

// return view 
app.get('/partials/home.ejs', function(request, response){
	response.render('partials/home.ejs');
});

app.listen(8080);


