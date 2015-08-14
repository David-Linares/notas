var app = angular
                .module('notas', 
                    ['ngRoute',
                    'firebase',
                    'ngCookies'])
                .config(function($routeProvider){
                    $routeProvider
                    	.when('/', {templateUrl: 'templates/login.html', controller: 'loginController'})
                    	.when('/principal', {templateUrl: 'templates/principal.html', controller: 'principalController'})
                        .otherwise({redirectTo: '/'});
                })
                .constant('firebaseUrl', 'https://notas.firebaseio.com/')