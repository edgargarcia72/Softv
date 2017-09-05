'use strict';
angular.module('softvApp')
  .factory('usuarioFactory', function ($http, $q, globalService, $localStorage) {
    var factory = {};
    var paths = {
      GetUsuarioSoftvList: '/Usuario/GetUsuarioSoftvList',
      GetConsultaIdentificacionUsuario: '/Usuario/GetConsultaIdentificacionUsuario',
      GetAddUsuarioSoftv: '/Usuario/GetAddUsuarioSoftv',
      GetAgregaEliminaRelCompaniaUsuario: '/Usuario/GetAgregaEliminaRelCompaniaUsuario',
      GetSoftvweb_GetUsuarioSoftvbyId: '/Usuario/GetSoftvweb_GetUsuarioSoftvbyId'
    };




    factory.GetAgregaEliminaRelCompaniaUsuario = function (clv_usuario, idcompania, opcion) {
      var deferred = $q.defer();
      var config = {
        headers: {
          'Authorization': $localStorage.currentUser.token
        }
      };
      var Parametros = {
        'clv_usuario': clv_usuario,
        'idcompania': idcompania,
        'opcion': opcion
      };
      console.log(Parametros);
      $http.post(globalService.getUrl() + paths.GetAgregaEliminaRelCompaniaUsuario, JSON.stringify(Parametros), config).then(function (response) {
        deferred.resolve(response.data);
      }).catch(function (response) {
        deferred.reject(response);
      });
      return deferred.promise;
    };


    factory.GetSoftvweb_GetUsuarioSoftvbyId = function (Id) {
      var deferred = $q.defer();
      var config = {
        headers: {
          'Authorization': $localStorage.currentUser.token
        }
      };
      var Parametros = {
        'Id': Id,

      };
      console.log(Parametros);
      $http.post(globalService.getUrl() + paths.GetSoftvweb_GetUsuarioSoftvbyId, JSON.stringify(Parametros), config).then(function (response) {
        deferred.resolve(response.data);
      }).catch(function (response) {
        deferred.reject(response);
      });
      return deferred.promise;
    };









    factory.GetAddUsuarioSoftv = function (object) {
      var deferred = $q.defer();
      var config = {
        headers: {
          'Authorization': $localStorage.currentUser.token
        }
      };
      var Parametros = {
        'usuario': {
          'Clave': 0,
          'Clv_Usuario': object.Clv_Usuario,
          'Domicilio': object.Domicilio,
          'Colonia': object.Colonia,
          'FechaIngreso': object.FechaIngreso,
          'FechaSalida': object.FechaSalida,
          'Activo': object.Activo,
          'Pasaporte': object.Pasaporte,
          'Clv_TipoUsuario': object.Clv_TipoUsuario,
          'CATV': object.CATV,
          'Facturacion': object.Facturacion,
          'Boletos': object.Boletos,
          'Mizar_AN': object.Mizar_AN,
          'RecibeMensaje': object.RecibeMensaje,
          'NotaDeCredito': object.NotaDeCredito,
          'Clv_IdentificacionUsuario': object.Clv_IdentificacionUsuario,
          'RecibeMensajeDocumentos': object.RecibeMensajeDocumentos,
          'Nombre': object.Nombre


        }

      };
      console.log(Parametros);
      $http.post(globalService.getUrl() + paths.GetAddUsuarioSoftv, JSON.stringify(Parametros), config).then(function (response) {
        deferred.resolve(response.data);
      }).catch(function (response) {
        deferred.reject(response);
      });
      return deferred.promise;
    };





    factory.GetConsultaIdentificacionUsuario = function (clave, Nombre) {
      var deferred = $q.defer();
      var config = {
        headers: {
          'Authorization': $localStorage.currentUser.token
        }
      };
      var Parametros = {
        'clave': clave,
        'Nombre': Nombre
      };
      console.log(Parametros);
      $http.post(globalService.getUrl() + paths.GetConsultaIdentificacionUsuario, JSON.stringify(Parametros), config).then(function (response) {
        deferred.resolve(response.data);
      }).catch(function (response) {
        deferred.reject(response);
      });
      return deferred.promise;
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


    factory.GetUsuarioSoftvList = function (object) {
      var deferred = $q.defer();
      var config = {
        headers: {
          'Authorization': $localStorage.currentUser.token
        }
      };
      var Parametros = {
        'Clv_Usuario': object.ClvUsuario,
        'Nombre': object.Nombre,
        'Op': object.Op,
        'idcompania': object.idcompania
      };
      console.log(Parametros);
      $http.post(globalService.getUrl() + paths.GetUsuarioSoftvList, JSON.stringify(Parametros), config).then(function (response) {
        deferred.resolve(response.data);
      }).catch(function (response) {
        deferred.reject(response);
      });
      return deferred.promise;
    };

    return factory;
  });
