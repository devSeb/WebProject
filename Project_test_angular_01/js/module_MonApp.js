

var app = angular.module('MonAapp',['ngRoute']);

app.config(function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl : 'partials/home.html', 
				controller: 'PostController'})

			.when('/comments/:id',{ 
				templateUrl : 'partials/comments.html' , 
				controller: 'Comments_ctrl'}) 
			// changement de controlleur before : comments_ctrl
			.otherwise({redirectTo : '/'})
	});





app.factory('postFactory', function($http, $q){
		var factory = 
		{
			/* JSON  for the database */
			/* File  = posts.json */

			posts : false,

			/*
			 *  @function getPostes : return factory object 
			 *	@return  factory object ( Json) or Boolean False
			 */
			getPosts : function(){
				return factory.posts;
			},

			/*
			 *  @function getPostsHttp : Ajax methods to find json on the server
			 *	@return  result of ajax ( Json or String error )
			 */
			getPostsHttp : function(){
				
				// Defer
				var deferred  = $q.defer();
				console.log("connexion")
					
					/* if factory.posts is already used  return the object saved */
					 if ( factory.posts != false)
					 {
							deferred.resolve(factory.posts);
					}
					else
					{
						//setTimeout(function() {
						$http({
						  method: 'GET',
						  url: 'http://www.json-generator.com/api/json/get/bLjSyrmQvC?indent=2'
						}).then(function successCallback(response) {
						    // this callback will be called asynchronously
						    // when the response is available

						    	/* If responses if successfull return the response , save the response to factory.posts*/
						   		factory.posts = response.data;
						   		/* the defer saved the factory.posts */
						   		deferred.resolve(factory.posts);

						  }, function errorCallback(response) {
						    // called asynchronously if an error occurs
						    // or server returns response with an error status.
						    
						    /* the defer error save the string error */
						     deferred.reject("Error");
						  });
						//}, 3000);
					}
					return deferred.promise;
			},

			/*
			 *  @function getPost : find factory with parameter id
			 *	@return  return factory with parameter id
			 */
			getPost : function(id){
				console.log("id = "+id);
				return factory.posts[id];
			},

			/*
			 *  @function getPostHttp : use the ajax and find the value of the factory with parameter
			 *	@return  return factory with parameter id
			 */
			getPostHttp : function(id){
				console.log("------getPostHttp-----");
				var deferred  = $q.defer();
						posts = factory.getPostsHttp().then(function (posts){
						factory.posts = posts;
						deferred.resolve(factory.posts[id]);
					}, function(msg){
						 deferred.reject(msg);
						alert(msg);
					});	
				return deferred.promise;
			},
			// end factory 
		}
		return factory;
	});





app.controller('PostController',function($scope, postFactory){
		
		console.log("controller");
		
		//FACTORY ( WORK ) 
		//$scope.posts = postFactory.getPosts();
		
		$scope.posts = postFactory.getPostsHttp().then(function (posts){
			$scope.posts = posts;

			$scope.vizu = false;
		}, function(msg){
			$scope.vizu = true;
		});	

		
		$scope.images =
		[
			{"id_image" : "1", "url" : "http://lorempixel.com/400/200/nightlife/1/"},
			{"id_image" : "2", "url" : "http://lorempixel.com/400/200/nightlife/2/"},
			{"id_image" : "3", "url" : "http://lorempixel.com/400/200/nightlife/3/"},
			{"id_image" : "4", "url" : "http://lorempixel.com/400/200/nightlife/4/"},
			{"id_image" : "5", "url" : "http://lorempixel.com/400/200/nightlife/5/"},
			{"id_image" : "6", "url" : "http://lorempixel.com/400/200/nightlife/6/"},
			{"id_image" : "7", "url" : "http://lorempixel.com/400/200/nightlife/7/"},
		];

		//console.log("controller = "+$scope.posts);
		//console.log("response controller = "+$scope.posts);	
	});






app.controller('Comments_ctrl', function($scope, postFactory,  $routeParams){

		//FACTORY ( WORK ) 
		//console.log($routeParams.id);
		//$scope.title = postFactory.getPost($routeParams.id).name;
		//$scope.comments = postFactory.getPost($routeParams.id).comments;

		$scope.posts = postFactory.getPostHttp($routeParams.id).then(function (post){
		
			$scope.title = post.name;
			$scope.comments = post.comments;
			$scope.vizu = false;


		}, function(msg){
			$scope.vizu = true;
		});	
			
		$scope.newComment = {};
		$scope.addComments = function(){
			$scope.comments.push($scope.newComment);

			/* controller test 
			 ajouter foncion dans la factory
			postFactory.add($scope.newComment).then(function{

			}, function(){
				alert("ok");
			});
*/
			$scope.newComment = {};
		};
	});


