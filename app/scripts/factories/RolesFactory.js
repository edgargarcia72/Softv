'use strict';
angular
    .module('softvApp')
    .factory('RolesFactory', function($http, $q, globalService, $localStorage){

        var factory = {};
        var paths ={
            GetRolList: '/Role/GetRolList'
        };

        factory.GetRolList = function(){
            var deferred = $q.defer();
            var config = {headers:{'Authorization':$localStorage.currentUser.token}};
            $http.get(globalService.getUrl() + paths.GetRolList, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        return factory;

    });