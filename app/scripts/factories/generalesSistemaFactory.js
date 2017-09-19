'use strict';
angular
  .module('softvApp')
  .factory('generalesSistemaFactory', function ($http, $q, globalService, $localStorage) {
    var factory = {};
    var paths = {
      GetPeriodoscorte: '/Configuracion/GetPeriodoscorte',
      GetGeneralesPrincipal: '/Configuracion/GetGeneralesPrincipal',
      GetspConsultaRangosCobroMaterial: '/Configuracion/GetspConsultaRangosCobroMaterial',
      GetCONSULTAGENERALESDESC: '/Configuracion/GetCONSULTAGENERALESDESC',
      GetImpuestos: '/Configuracion/GetImpuestos',
      GetNueGeneralDesconexionPagosDif: '/Configuracion/GetNueGeneralDesconexionPagosDif',
      GetMODIFCAPeriodos: '/Configuracion/GetMODIFCAPeriodos',
      GetMODIFCAGENERALESDESC: '/Configuracion/GetMODIFCAGENERALESDESC',
      GetNueTabla_Impuestos: '/Configuracion/GetNueTabla_Impuestos',
      GetspAgregaRangosCobroMaterial: '/Configuracion/GetspAgregaRangosCobroMaterial',
      GetspEliminaRangosCobroMaterial: '/Configuracion/GetspEliminaRangosCobroMaterial',
      GetModificaPromocionesGeneral: '/Configuracion/GetModificaPromocionesGeneral',
      GetGeneralesPrincipalGuardar: '/Configuracion/GetGeneralesPrincipalGuardar',
      GetChangePassword: '/Configuracion/GetChangePassword',
      

    };

    factory.GetChangePassword = function (passwordant,passwordnue) {
      var deferred = $q.defer();
      var Parametros = {
        'pswanterior':passwordant,
        'pswnueva':passwordnue,
        'usuario':$localStorage.currentUser.usuario,
        'op':0
      };
      var config = {
        headers: {
          'Authorization': $localStorage.currentUser.token
        }
      };
      $http.post(globalService.getUrl() + paths.GetChangePassword, JSON.stringify(Parametros), config).then(function (response) {
        deferred.resolve(response.data);
      }).catch(function (response) {
        deferred.reject(response.data);
      });

      return deferred.promise;
    };




    factory.GetGeneralesPrincipalGuardar = function (obj) {
      var deferred = $q.defer();
      var Parametros = {
        'GeneralesPrincipalEntity': {
          'id': obj.id,
          'nombre': obj.nombre,
          'direccion': obj.direccion,
          'colonia': obj.colonia,
          'ciudad': obj.ciudad,
          'estado': obj.estado,
          'rfc': obj.rfc,
          'cp': obj.cp,
          'telefonos': obj.telefonos,
          'numexterior': obj.numexterior,
          'numinterior': obj.numinterior,

        }

      };
      var config = {
        headers: {
          'Authorization': $localStorage.currentUser.token
        }
      };
      $http.post(globalService.getUrl() + paths.GetGeneralesPrincipalGuardar, JSON.stringify(Parametros), config).then(function (response) {
        deferred.resolve(response.data);
      }).catch(function (response) {
        deferred.reject(response.data);
      });

      return deferred.promise;
    };





    factory.GetModificaPromocionesGeneral = function (docexcatorce, seisxsiete, usuario, idcompania) {
      var deferred = $q.defer();
      var Parametros = {
        'docexcatorce': docexcatorce,
        'seisxsiete': seisxsiete,
        'usuario': usuario,
        'idcompania': idcompania

      };
      var config = {
        headers: {
          'Authorization': $localStorage.currentUser.token
        }
      };
      $http.post(globalService.getUrl() + paths.GetModificaPromocionesGeneral, JSON.stringify(Parametros), config).then(function (response) {
        deferred.resolve(response.data);
      }).catch(function (response) {
        deferred.reject(response.data);
      });

      return deferred.promise;
    };





    factory.GetspEliminaRangosCobroMaterial = function (Idrango) {
      var deferred = $q.defer();
      var Parametros = {
        'Idrango': Idrango
      };
      var config = {
        headers: {
          'Authorization': $localStorage.currentUser.token
        }
      };
      $http.post(globalService.getUrl() + paths.GetspEliminaRangosCobroMaterial, JSON.stringify(Parametros), config).then(function (response) {
        deferred.resolve(response.data);
      }).catch(function (response) {
        deferred.reject(response.data);
      });

      return deferred.promise;
    };





    factory.GetspAgregaRangosCobroMaterial = function (obj) {
      var deferred = $q.defer();
      var Parametros = {
        'CobroMaterial': {
          'id': obj.id,
          'inicio': obj.inicio,
          'final': obj.final,
          'maximo': obj.maximo,
          'idcompania': obj.idcompania
        }

      };
      var config = {
        headers: {
          'Authorization': $localStorage.currentUser.token
        }
      };
      $http.post(globalService.getUrl() + paths.GetspAgregaRangosCobroMaterial, JSON.stringify(Parametros), config).then(function (response) {
        deferred.resolve(response.data);
      }).catch(function (response) {
        deferred.reject(response.data);
      });

      return deferred.promise;
    };





    factory.GetNueTabla_Impuestos = function (obj) {
      var deferred = $q.defer();
      var Parametros = {
        'ImpuestosEntity': {
          'Id': obj.Id,
          'IVA': obj.IVA,
          'IEPS': obj.IEPS,
          'siIEPS': obj.siIEPS,
          'Cta_IEPS': obj.Cta_IEPS,
          'Calculo1': obj.Calculo1,
          'idcompania': obj.idcompania
        }

      };
      var config = {
        headers: {
          'Authorization': $localStorage.currentUser.token
        }
      };
      $http.post(globalService.getUrl() + paths.GetNueTabla_Impuestos, JSON.stringify(Parametros), config).then(function (response) {
        deferred.resolve(response.data);
      }).catch(function (response) {
        deferred.reject(response.data);
      });

      return deferred.promise;
    };




    factory.GetMODIFCAGENERALESDESC = function (obj) {
      var deferred = $q.defer();
      var Parametros = {
        'CONSULTAGENERALESDESC': {
          'clv_periodo': obj.clv_periodo,
          'idcompania': obj.idcompania,
          'diaInicial': obj.diaInicial,
          'diaFinal': obj.diaFinal,
          'diasPPP': obj.diasPPP,
          'diasPA': obj.diasPA,
          'diaCorte': obj.diaCorte
        }

      };
      var config = {
        headers: {
          'Authorization': $localStorage.currentUser.token
        }
      };
      $http.post(globalService.getUrl() + paths.GetMODIFCAGENERALESDESC, JSON.stringify(Parametros), config).then(function (response) {
        deferred.resolve(response.data);
      }).catch(function (response) {
        deferred.reject(response.data);
      });

      return deferred.promise;
    };








    factory.GetMODIFCAPeriodos = function (Clv_Periodo, Habilitar, idcompania) {
      var deferred = $q.defer();
      var Parametros = {
        'Clv_Periodo': Clv_Periodo,
        'Habilitar': Habilitar,
        'idcompania': idcompania,

      };
      var config = {
        headers: {
          'Authorization': $localStorage.currentUser.token
        }
      };
      $http.post(globalService.getUrl() + paths.GetMODIFCAPeriodos, JSON.stringify(Parametros), config).then(function (response) {
        deferred.resolve(response.data);
      }).catch(function (response) {
        deferred.reject(response.data);
      });

      return deferred.promise;
    };





    factory.GetNueGeneralDesconexionPagosDif = function (Clv_Periodo, DiaCorte, cobra, idcompania) {
      var deferred = $q.defer();
      var Parametros = {
        'Clv_Periodo': Clv_Periodo,
        'DiaCorte': DiaCorte,
        'cobra': cobra,
        'idcompania': idcompania,
      };
      var config = {
        headers: {
          'Authorization': $localStorage.currentUser.token
        }
      };
      $http.post(globalService.getUrl() + paths.GetNueGeneralDesconexionPagosDif, JSON.stringify(Parametros), config).then(function (response) {
        deferred.resolve(response.data);
      }).catch(function (response) {
        deferred.reject(response.data);
      });

      return deferred.promise;
    };



    factory.GetImpuestos = function (id, idcompania) {
      var deferred = $q.defer();
      var Parametros = {
        'id': id,
        'idcompania': idcompania
      };
      var config = {
        headers: {
          'Authorization': $localStorage.currentUser.token
        }
      };
      $http.post(globalService.getUrl() + paths.GetImpuestos, JSON.stringify(Parametros), config).then(function (response) {
        deferred.resolve(response.data);
      }).catch(function (response) {
        deferred.reject(response.data);
      });

      return deferred.promise;
    };



    factory.GetCONSULTAGENERALESDESC = function (Clv_Periodo, idcompania) {
      var deferred = $q.defer();
      var Parametros = {
        'Clv_Periodo': Clv_Periodo,
        'idcompania': idcompania
      };
      var config = {
        headers: {
          'Authorization': $localStorage.currentUser.token
        }
      };
      $http.post(globalService.getUrl() + paths.GetCONSULTAGENERALESDESC, JSON.stringify(Parametros), config).then(function (response) {
        deferred.resolve(response.data);
      }).catch(function (response) {
        deferred.reject(response.data);
      });

      return deferred.promise;
    };

    factory.GetspConsultaRangosCobroMaterial = function (idcompania) {
      var deferred = $q.defer();
      var Parametros = {
        'idcompania': idcompania
      };
      var config = {
        headers: {
          'Authorization': $localStorage.currentUser.token
        }
      };
      $http.post(globalService.getUrl() + paths.GetspConsultaRangosCobroMaterial, JSON.stringify(Parametros), config).then(function (response) {
        deferred.resolve(response.data);
      }).catch(function (response) {
        deferred.reject(response.data);
      });

      return deferred.promise;
    };


    factory.GetGeneralesPrincipal = function () {
      var deferred = $q.defer();
      var config = {
        headers: {
          'Authorization': $localStorage.currentUser.token
        }
      };
      $http.get(globalService.getUrl() + paths.GetGeneralesPrincipal, config).then(function (response) {
        deferred.resolve(response.data);
      }).catch(function (response) {
        deferred.reject(response.data);
      });
      return deferred.promise;
    };


    factory.GetPeriodoscorte = function (clv_periodo, idcompania) {
      var deferred = $q.defer();
      var Parametros = {
        'clv_periodo': clv_periodo,
        'idcompania': idcompania
      };
      var config = {
        headers: {
          'Authorization': $localStorage.currentUser.token
        }
      };
      $http.post(globalService.getUrl() + paths.GetPeriodoscorte, JSON.stringify(Parametros), config).then(function (response) {
        deferred.resolve(response.data);
      }).catch(function (response) {
        deferred.reject(response.data);
      });
      return deferred.promise;
    };




    return factory;
  });
