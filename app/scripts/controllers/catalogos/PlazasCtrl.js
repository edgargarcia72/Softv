'use strict';

angular
    .module('softvApp')
    .controller('PlazasCtrl', function(CatalogosFactory, ngNotify, $rootScope, $state){
        
        function initData(){
            CatalogosFactory.GetPlazaList().then(function(data){
                vm.PlazaList = data.GetPlazaListResult;
                 if(vm.PlazaList.length == 0){
					vm.SinRegistros = true;
					vm.ConRegistros = false;
				}else{
					vm.SinRegistros = false;
					vm.ConRegistros = true;
				}
            });
        }

        var vm = this;

        initData();
        
    });