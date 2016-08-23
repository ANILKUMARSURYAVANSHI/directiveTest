'use strict';
/**
 * @ngdoc overview
 * @name Maharana App
 * @description
 * # machine app
 *
 * Main module of the application.
 */

var app = angular.module('machineApp', ['ngRoute']);
app.config(function( $routeProvider , $locationProvider) {

		
	// Forms
	$routeProvider.when('/post', {
		templateUrl : 'html/post.html',
		controller : 'postCntrl',
		title : "Post Data"
	})
	// Default Pages
	.when('/', {
		templateUrl : 'html/landing.html',
		controller : 'landCntrl',
		title : "Welcome to Test"
	}).otherwise({
		redirectTo : '/'
	});

	 
	/* $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});*/
});

app.factory('newfact', [ function(){
	var oCalSer ={};
	oCalSer.doSum = function(){

	}
	return oCalSer;
}]);

app.service('newServ', [ function(){
	this.doSum = function(){

	}
	
}])