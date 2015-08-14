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

	$scope.registro = function(){
		console.log("ok");
		loginService.registrar($scope.nuevoUsuario).then(function(data){
			console.log(data);
			$location.path('/principal')
		}, function(error){
			console.log(error);
		})
	}

}])

app.controller('headerController', ['$scope', 'loginService', '$cookies', '$location' ,function($scope, loginService, $cookies, $location){
	$scope.logueado = loginService.logueado;
	$scope.user = loginService.user;
	console.log($scope.user);
	$scope.logout = function(){
		loginService.cerrarSesion();
		$location.path("/");
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
