var app = angular
                .module('notas', 
                    ['ngRoute',
                    'firebase',
                    'ngCookies'])
                .config(function($routeProvider){
                    $routeProvider
                    	.when('/', {templateUrl: 'templates/login.html', controller: 'loginController'})
                        .when('/principal', {templateUrl: 'templates/principal.html', controller: 'principalController'})
                    	.when('/registro', {templateUrl: 'templates/registro.html', controller: 'loginController'})
                        .otherwise({redirectTo: '/'});
                })
                .constant('firebaseUrl', 'https://notas.firebaseio.com/')