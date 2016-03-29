//controllers
app.controller('HomeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService){

$scope.city= cityService.city;
$scope.$watch('city', function(){
	cityService.city= $scope.city;
});
$scope.submit = function() {
	$location.path('/forcast');
};

}]);

app.controller('ForcastController', ['$scope','cityService', '$routeParams', function($scope, cityService, $routeParams){

$scope.city= cityService.city;
$scope.days= $routeParams.days || '2';
$scope.weatherResult= cityService.getWeather($scope.city, $scope.days);
$scope.convertToFahrenheit= function(degK){
	return Math.round((1.8*(degK-273))+ 32);
};
$scope.convertToDate= function(dt) {
	return new Date(dt*1000);
};
$scope.icon= "http://openweathermap.org/img/w/{{weatherDay.weather[0].icon}}.png";

}]);