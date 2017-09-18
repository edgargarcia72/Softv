'use strict'
angular
    .module('softvApp')
    .controller('ServiciosCtrl', function(CatalogosFactory, ngNotify, $uibModal, $state, $stateParams, $rootScope, $localStorage){

        function initData(){
            CatalogosFactory.GetMuestraTipSerPrincipal_SERList().then(function(data){
                console.log(data);
                vm.TipoServicioList = data.GetMuestraTipSerPrincipal_SERListResult;
            });
        }

        var vm = this;
        initData();
    });