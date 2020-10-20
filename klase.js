var app = angular.module('myApp', []);		//module

app.controller('myController', function($scope, movieDB){	//servis $scope 
	//$scope.name = "Miroslav";		//data binding
	//$scope.array = ["1","2","3"];
	//$scope.allMovies = 
	//$scope.myClass="default";
	$scope.allMovies = movieDB;		//custom service 'movieDB'
})