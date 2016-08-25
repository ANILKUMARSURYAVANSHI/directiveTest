app.directive('mydir', [ function(){
	// Runs during compile
	return {	
		
		 templateUrl: 'directive.html',
		  scope : { objd : '=emp' }
	
	};
}]);


app.directive('myCal', [ function(){
	// Runs during compile
	return {	
		
		 templateUrl: 'directiveCal.html',
		  scope : { obj : '&emp' }
	
	};
}]);


app.directive('empDetailTwoway', [ function(){
	// Runs during compile
	return {	
		
		 templateUrl: 'employeeDetails.html',
		  scope : { obj : '=emp' }
	
	};
}]);

app.directive('empDetailOneway', [ function(){
	// Runs during compile
	return {	
		
		 templateUrl: 'employeeDetails.html',
		  scope : { obj : '&emp' }
		};
}]);