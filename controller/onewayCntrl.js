app.controller('onewayCntrl',function($scope, $rootScope, $location, $route, appService , CONST){


	// Load at inti 

	$scope.load = function(){

		$scope.sent = {  title : '',
						 body : ''

		};

		$scope.formDisableBool = false;  //disable and hide 

		$scope.emp1Details = { 'name' : 'Anil Kumar',
							   'designation': 'Software Engineer' };
		$scope.emp2Details = { 'name' 			: 'Sunil Kumar',
							    'designation'	: 'Mechanical Software' };
	
	};
 
	



});

