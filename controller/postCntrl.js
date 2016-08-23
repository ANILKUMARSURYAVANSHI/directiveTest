app.controller('postCntrl',function($scope, $rootScope, $location, $route, appService , CONST){


	// Load at inti 


	$scope.load = function(){

		$scope.sent = {  title : '',
						 body : ''

		};

		$scope.formDisableBool = false;  //disable and hide 
		$scope.isError = false;    //show error message
		$scope.titleError = false;  //show error message
		$scope.bodyError = false;  //show error message
	};

		$scope.clearError =function() {
			$scope.isError = false;
			$scope.titleError = false;
			$scope.bodyError = false;

		}


		$scope.submitdata = function(){
				$scope.clearError();

			if($scope.sent.title== null || $scope.sent.title === ""  || $scope.sent.title== undefined ){
					$scope.isError = true;
					$scope.titleError = true;
			}
			if($scope.sent.body== null || $scope.sent.body === ""  || $scope.sent.body== undefined ){
					$scope.isError = true;
					$scope.bodyError = true;
			}


			if($scope.isError == false){
				$scope.savedata();	
			}


		
		}

		

//*******************************save data 
		$scope.savedata = function(){

		$rootScope.loader = false;	
		  appService.postRecords(CONST.COMMON.URL.POST, $scope.sent).then(function(data) {	

        /*console.log('response---------------', JSON.stringify(data));*/

         console.log('submit.. Post DATA.....'+JSON.stringify(data));
         	$rootScope.loader = true;	
         	  $('#myModal').modal({
                                 backdrop:'static',  
                                 show:true
                                });

       $scope.formDisableBool = true;

      }, function(failure) {

        console.log("Failure from "+ CONST.COMMON.URL.POST);
        $rootScope.loader = true;	
       
      });


}

// *******************************reload the window
$scope.reset  = function(){
	$route.reload();
}



});

