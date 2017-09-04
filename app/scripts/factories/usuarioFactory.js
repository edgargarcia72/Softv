'use strict';
angular.module('softvApp')
  .factory('usuarioFactory', function ($http, $q, globalService, $localStorage) {
    var factory = {};
    var paths = {
      GetUsuarioSoftvList: '/Usuario/GetUsuarioSoftvList'
    };
    factory.GetRolList = function () {
      var deferred = $q.defer();
      var config = {
        headers: {
          'Authorization': $localStorage.currentUser.token
        }
      };
      $http.get(globalService.getUrl() + paths.getRolList, config).then(function (response) {
        deferred.resolve(response.data);
      }).catch(function (response) {
        deferred.reject(response);
      });
      return deferred.promise;
    };


    factory.GetUsuarioSoftvList = function (ClvUsuario, Nombre, Op, idcompania) {
      var deferred = $q.defer();
      var config = {
        headers: {
          'Authorization': $localStorage.currentUser.token
        }
      };
      var Parametros = {
        'Clv_Usuario': ClvUsuario,
        'Nombre': Nombre,
        'Op': Op,
        'idcompania': idcompania
      }

      $http.post(globalService.getUrl() + paths.GetUsuarioSoftvList, config, JSON.stringify(Parametros)).then(function (response) {
        deferred.resolve(response.data);
      }).catch(function (response) {
        deferred.reject(response);
      });
      return deferred.promise;
    };

    return factory;
  });
