app.controller('landCntrl', ['$scope', '$rootScope', '$location', 'appService' , 'CONST', function($scope, $rootScope, $location, appService , CONST ) { 



 $scope.load = function(){

 	$scope.list = [];  //blank list

 		// data details 
 		$rootScope.loader = false;	
	appService.getRecords(CONST.COMMON.URL.GET).then(function(data) {
            	      
        console.log('DATA.....'+JSON.stringify(data));
       	$scope.list = data;
        $rootScope.loader = true;
      }, function(failure) {
   
     console.log("Something Went wrong");
     $rootScope.loader = true;	
    
    });

 }


 $scope.doSum = function(a,b){

  return a+b;
 }
	


	



}]);