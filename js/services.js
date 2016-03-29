//services
app.service('cityService', ['$resource', function($resource){
	this.city= "New York, NY";

	this.getWeather = function(city, days) {
		var weath= $resource('http://api.openweathermap.org/data/2.5/forecast/daily?q='+ city+ '&cnt='+ days+'&appid=e7c054052d0ba992342d25159d78b2e3', {callback: 'JSON_CALLBACK'}, {get:{method:'JSONP'}});
		return weath.get({q:city, cnt:days});
	}
}]);
