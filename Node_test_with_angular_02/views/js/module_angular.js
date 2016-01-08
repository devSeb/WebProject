var app = angular.module('MonAapp',['ngRoute']);

app.config(function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl : 'partials/home.ejs', 
				//controller: 'PostController'
			})
			/*
			.when('/comments/:id',{ 
				templateUrl : 'partials/comments.html' , 
				controller: 'Comments_ctrl'}) 
			// changement de controlleur before : comments_ctrl
			*/
			.otherwise({redirectTo : '/'})
	});

