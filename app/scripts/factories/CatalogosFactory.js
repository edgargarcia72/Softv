'use strict';

angular
    .module('softvApp')
    .factory('CatalogosFactory', function($http, $q, globalService, $localStorage){

        var factory = {};
        var paths = {
            GetPlazaList: '/Plaza/GetPlazaList',
            GetPeriodoCobroList: '/PeriodoCobro/GetPeriodoCobroList',
            GetTipoClienteList_WebSoftvnew: '/TipoCliente/GetTipoClienteList_WebSoftvnew',
            AddClienteL: '/Cliente/AddClienteL'
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
            var parametros = {};
            $http.post(globalService.getUrl() + paths.AddClienteL, JSON.stringify(parametros), config).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        return factory;

    });