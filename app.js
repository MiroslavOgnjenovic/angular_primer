var app = angular.module('myApp', []);		//module

app.controller('myController', function($scope){	//servis $scope
	//$scope.name = "Miroslav";		//data binding
	//$scope.array = ["1","2","3"];
	$scope.persons = [
		{
			name : "Miroslav",
			age : 63,
			pet : "maca",
			petGenre : "cat"
		},
		{
			name : "Ljiljana",
			age : 53,
			pet : "malaMaca",
			petGenre : "cat"
		},
		{
			name : "Djordje",
			age : 23,
			pet : "maca",
			petGenre : "cat"
		},
		{
			name : "Djurdja",
			age : 21,
			pet : "malaMaca",
			petGenre : "cat"
		}
	]
})