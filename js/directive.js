//custom directive

app.directive('subWeather', function(){
	return {
		restrict: "E",
		replace: true,
		scope: {
			weatherDay: "=",
			convertToStandard: "&",
			convertToDate: "&",
			dateFormat: "@"
		},
		templateUrl: 'directive/subweather.html'
	};
})

