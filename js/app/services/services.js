app.factory('loginService', function(firebaseUrl, $firebaseAuth, $firebase, $location){
	var ref = new Firebase(firebaseUrl);
	var auth = $firebaseAuth(ref);

	var Auth = {

		user: {},
		login: function(user){
			return auth.$authWithPassword(
				{email: user.email, password: user.password}
			);
		},
		cerrarSesion: function(){
			SessionService.unset('somevar');
			auth.$unauth();
			$rootScope.islogueado = Auth.logueado;
			$location.path('/login');
		},
		logueado: function(){
			return !!Auth.user.provider;
		}
	}

	auth.$onAuth(function(authData){
		if (authData) {
			angular.copy(authData, Auth.user);
		}else{
			angular.copy({}, Auth.user);
		}
	})
	return Auth;
})