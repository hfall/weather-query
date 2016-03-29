//module
var app= angular.module('myWeather', ['ngRoute', 'ngResource']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		controller: 'HomeController',
		templateUrl: 'views/home.html'
		})
	.when('/forcast',{
		controller: 'ForcastController',
		templateUrl: 'views/forcast.html'
		})
	.when('/forcast/:days',{
		controller: 'ForcastController',
		templateUrl: 'views/forcast.html'
		})
	.otherwise({redirectTo:'/'})
});








