'use strict';
angular
  .module('softvApp')
  .factory('plazaFactory', function ($http, $q, globalService, $localStorage) {

    var paths = {
     
    };

    var factory = {};


   factory.AddPlaza_DistribuidoresNew = function (obj) {
      var deferred = $q.defer(); 

    
      var config = {
        headers: {
          'Authorization': $localStorage.currentUser.token
        }
      };
      $http.post(globalService.getUrl() + paths.AddPlaza_DistribuidoresNew, JSON.stringify(Parametros), config).then(function (response) {
        deferred.resolve(response.data);
      }).catch(function (response) {
        deferred.reject(response.data);
      });

      return deferred.promise;
    };   

    return factory;


  });
