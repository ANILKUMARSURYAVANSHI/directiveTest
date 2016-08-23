'use-strict';

/**
 * @ngdoc function
 * @name CommonServiceValidation
 * @description
 */

app.service('$commonValidation', ['$rootScope',
function($rootScope) {

	var api = {};


	function validateAlphabets(str) {
		var letters = /^[A-Za-z]+$/;
		if (letters.test(str)) {
			return true;
		} else {
			return false;
		}
	}





	api = {
	
		validateAlphabets : validateAlphabets,
		
		

	};

	return api;

}]);

