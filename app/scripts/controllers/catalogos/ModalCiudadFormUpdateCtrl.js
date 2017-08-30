'use strict';

angular
    .module('softvApp')
    .controller('ModalCiudadFormUpdateCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state, IdMunicipio){

        function initData(){
            CatalogosFactory.GetEstadoList2_web().then(function(data){
                vm.EstadoList = data.GetEstadoList2_webResult;
            });

            CatalogosFactory.GetDeepMunicipio(IdMunicipio).then(function(data){
                var Ciudad = data.GetDeepMunicipioResult;
                vm.IdCiudad = Ciudad.IdMunicipio;
                vm.Ciudad = Ciudad.Nombre;
                var Rel = Ciudad.RelMunicipioEst;
                for(var i = 0; Rel.length > i; i ++){
                    var RelEst = {};
                    RelEst.IdMunicipio = vm.IdCiudad
                    RelEst.IdEstado = Rel[i].Estado.IdEstado;
                    var RelEstView = {};
                    RelEstView.IdMunicipio = vm.IdCiudad
                    RelEstView.IdEstado = Rel[i].Estado.IdEstado;
                    RelEstView.Estado = Rel[i].Estado.Nombre;
                    vm.RelEstList.push(RelEst);
                    vm.RelEstViewList.push(RelEstView);
                }
            });
        }

        function AddRelEst(){
            if(vm.Estado != undefined && vm.Estado != 0){
                var RelEst = {};
                RelEst.IdMunicipio = vm.IdCiudad;
                RelEst.IdEstado = vm.Estado.IdEstado;
                var RelEstView = {};
                RelEstView.IdMunicipio = vm.IdCiudad;
                RelEstView.IdEstado = vm.Estado.IdEstado;
                RelEstView.Estado = vm.Estado.Nombre;
                if(ExistsRelEst(RelEst.IdEstado) == false){
                    vm.RelEstList.push(RelEst);
                    vm.RelEstViewList.push(RelEstView);
                }else{
                    ngNotify.set('ERROR, Ya existe esta relación.', 'warn');
                }
            }else{
                ngNotify.set('ERROR, Selecciona un estado.', 'warn');
            }
        }

        function ExistsRelEst(IdEstado){
            var ResultExists = 0;
            for(var i = 0; vm.RelEstList.length > i; i ++){
                if(vm.RelEstList[i].IdEstado == IdEstado){
                    ResultExists = ResultExists + 1
                }
            }
            return (ResultExists > 0)? true : false;
        }

        function DeleteRelEst(IdEstado){
            for(var i = 0; vm.RelEstList.length > i; i ++){
                if(vm.RelEstList[i].IdEstado == IdEstado){
                    vm.RelEstList.splice(i, 1);
                    vm.RelEstViewList.splice(i, 1);
                }
            }
        }

        function SaveCiudad(){
            if(vm.RelEstList.length > 0){
                var lstRelEstado = {};
                lstRelEstado.IdMunicipio = vm.IdCiudad;
                lstRelEstado.Nombre = vm.Ciudad;
                var RelMunicipioEstAdd = vm.RelEstList;
                CatalogosFactory.UpdateRelEstMunL(lstRelEstado, RelMunicipioEstAdd).then(function(data){
                    if(data.UpdateRelEstMunLResult == -1){
                        ngNotify.set('CORRECTO, se guardó la ciudad.', 'success');
                        $state.reload('home.catalogos.ciudades');
                        cancel();
                    }else{
                        ngNotify.set('ERROR, al guardar la ciudad.', 'warn');
                        $state.reload('home.catalogos.ciudades');
                        cancel();
                    }
                });
            }else{
                 ngNotify.set('ERROR, Para la ciudad, se tiene que ingresar mínimo una relación.', 'warn');
            }
        }
        
        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.Titulo = 'Editar Registro - ';
        vm.Icono = 'fa fa-pencil-square-o';
        vm.RelEstList = [];
        vm.RelEstViewList = [];
        vm.AddRelEst = AddRelEst;
        vm.DeleteRelEst = DeleteRelEst;
        vm.SaveCiudad = SaveCiudad;
        vm.cancel = cancel;
        initData();

    });