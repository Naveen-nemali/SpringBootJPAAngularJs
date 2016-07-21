var myApp = angular.module("myApp", []);

myApp.controller("HelloController", function($scope, $http){
    
	    alert("hi");
		var res = $http.get("http://localhost:9000/info/person/1");
		
		res.success(function(data, status) {
			alert(data.id);
			alert(data.content);
			$scope.greeting = data;			
		});
	
});

