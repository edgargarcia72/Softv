'use strict';

angular
    .module('softvApp')
    .factory('CatalogosFactory', function($http, $q, globalService, $localStorage){

        var factory = {};
        var paths = {
            GetPlazaList: '/Plaza/GetPlazaList',
            GetPeriodoCobroList: '/PeriodoCobro/GetPeriodoCobroList',
            GetTipoClienteList_WebSoftvnew: '/TipoCliente/GetTipoClienteList_WebSoftvnew',
            AddClienteL: '/Cliente/AddClienteL',
            GetDeepCliente: '/Cliente/GetDeepCliente',
            GetEstadoList2_web: '/Estado/GetEstadoList2_web',
            GetEstadosRelMun: '/RelMunicipioEst/GetEstadosRelMun',
            GetLocalidadRelMun: '/RelLocalidadMunEst/GetLocalidadRelMun',
            GetColoniaRelLoc: '/RelColoniaLocMunEst/GetColoniaRelLoc',
            GetCalleRelCol: '/RelCalleColonia/GetCalleRelCol'
        };

        factory.GetPlazaList = function(){
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            $http.get(globalService.getUrl() + paths.GetPlazaList, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetPeriodoCobroList = function(){
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            $http.get(globalService.getUrl() + paths.GetPeriodoCobroList, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetTipoClienteList_WebSoftvnew = function(){
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            $http.get(globalService.getUrl() + paths.GetTipoClienteList_WebSoftvnew, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.AddClienteL = function (ObjCliente) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            var Parametros = {
                'lstCliente': {
                    Nombre1Er: ObjCliente.Nombre,
                    Nombre2Do: ObjCliente.NombreAdi,
                    ApePaterno: ObjCliente.PrimerApe,
                    ApeMaterno: ObjCliente.SegundoApe,
                    ClvElector: ObjCliente.ClaveElector,
                    Telefono: ObjCliente.Telefono,
                    Celular: ObjCliente.Celular,
                    Email: ObjCliente.Email,
                    IdPlaza: ObjCliente.IdPlaza,
                    IdPeriodo: ObjCliente.IdPeriodo,
                    IdTipoCliente: ObjCliente.IdTipoCliente,
                    EsPersonaFisica: ObjCliente.TipoPersona,
                    FechaNacimiento: ObjCliente.FechaNac
                }
            };
            $http.post(globalService.getUrl() + paths.AddClienteL, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetDeepCliente = function (IdContrato) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            var Parametros = {
                'IdContrato': IdContrato
            };
            $http.post(globalService.getUrl() + paths.GetDeepCliente, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };
        
        factory.GetEstadoList2_web = function(){
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            $http.get(globalService.getUrl() + paths.GetEstadoList2_web, config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetEstadosRelMun = function (IdEstado) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            var Parametros = {
                'IdEstado': IdEstado
            };
            $http.post(globalService.getUrl() + paths.GetEstadosRelMun, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetLocalidadRelMun = function (IdMunicipio) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            var Parametros = {
                'IdMunicipio': IdMunicipio
            };
            $http.post(globalService.getUrl() + paths.GetLocalidadRelMun, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetColoniaRelLoc = function (IdLocalidad) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            var Parametros = {
                'IdLocalidad': IdLocalidad
            };
            $http.post(globalService.getUrl() + paths.GetColoniaRelLoc, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        factory.GetCalleRelCol = function (IdColonia) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Authorization': $localStorage.currentUser.token
                }
            };
            var Parametros = {
                'IdColonia': IdColonia
            };
            $http.post(globalService.getUrl() + paths.GetCalleRelCol, JSON.stringify(Parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        return factory;

    });