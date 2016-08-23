
app.factory('appService', function($http, $rootScope, $q, CONST) {
  var services = {
    getRecords : function(endpoint) {
      var deferred = $q.defer();
      var api_url = CONST.COMMON.URL.MAIN + endpoint ;     
      console.log(api_url);
      $http({
        url : api_url,
        dataType : 'json',
        method : 'GET',
        data : '',
        headers : {
          "Content-Type" : "application/json",
        }
      }).success(function(data, status, headers, config) {
        deferred.resolve(data);
      }).error(function(data, status, headers, config) {
        deferred.reject();
      });
      return deferred.promise;
    },

    postRecords : function(endpoint, params) {
      var deferred = $q.defer();
      var api_url = CONST.COMMON.URL.MAIN + endpoint ;      
      console.log(api_url);
      //jQuery.support.cors = true;
      $http({
        url : api_url,
        dataType : 'json',
        method : 'POST',
        data : params,
        headers : {
          "Content-Type" : "application/json",
        }
      }).success(function(data, status, headers, config) {
        deferred.resolve(data);
      }).error(function(data, status, headers, config) {
        deferred.reject();
      });
      return deferred.promise;
    }

    
  };
  return services;
});


