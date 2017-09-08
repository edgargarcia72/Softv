'use strict';

angular
    .module('softvApp')
    .controller('PlazasCtrl', function(CatalogosFactory, ngNotify, $rootScope, $state, $localStorage){
        
        function initData(){
            CatalogosFactory.GetPlazaList($localStorage.currentUser.idUsuario).then(function(data){
                console.log(data);
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