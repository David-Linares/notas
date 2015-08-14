app.controller('loginController', ['$scope', 'loginService', '$cookies', '$location' ,function($scope, loginService, $cookies, $location){

	$scope.loginuser = {'email': 'admin@notasapp.com', 'password': '12345'}

	$scope.ingresar = function(){
		loginService.login($scope.loginuser).then(function(data){
			console.log(data);
			$location.path('/principal');
			$cookies.put('logtok', data.token);
		}, function(error){
			console.log(error);
		})
	}

}])

app.controller('principalController', ['$scope', 'loginService', '$cookies', '$location' ,function($scope, loginService, $cookies, $location){

	console.log($cookies.get('logtok'));

	$scope.ingresar = function(){
		loginService.login($scope.loginuser).then(function(data){
			console.log(data);
			$location.path('/principal');
			$cookies.put('logtok', data.token);
		}, function(error){
			console.log(error);
		})
	}

}])
