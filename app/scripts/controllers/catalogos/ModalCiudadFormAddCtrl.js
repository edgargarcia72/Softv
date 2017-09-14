'use strict';

angular
    .module('softvApp')
    .controller('ModalCiudadFormAddCtrl', function(CatalogosFactory, $uibModalInstance, $uibModal, ngNotify, $state){

        function initData(){
            CatalogosFactory.GetEstados_NewList().then(function(data){
                console.log(data);
                vm.EstadoList = data.GetEstados_NewListResult;
            });
        }

        function AddRelEst(){
            if(vm.Estado != undefined && vm.Estado != 0){
                var RelEst = {};
                RelEst.IdEstado = vm.Estado.Clv_Estado;
                var RelEstView = {};
                RelEstView.IdEstado = vm.Estado.Clv_Estado;
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
            var ObjCiudad = {
                'Nombre': vm.Ciudad,
                'Id':0

            };
            /*if(vm.RelEstList.length > 0){*/
                /*var lstRelEstado = {};
                lstRelEstado.Nombre = vm.Ciudad;
                var RelMunicipioEstAdd = vm.RelEstList;*/
                CatalogosFactory.GetAddCiudades(ObjCiudad).then(function(data){
                    console.log(data);
                    if(data.GetAddCiudadesResult[0].mismoNombre == 0){
                        var IdMunicipio = data.GetAddCiudadesResult[0].Clv_Ciudad
                        console.log(IdMunicipio);
                        ngNotify.set('CORRECTO, se añadió una ciudad nueva.', 'success');
                        cancel();
                        $state.reload('home.catalogos.ciudades');
                        OpenUpdateCiudad(IdMunicipio);
                    }else if(data.GetAddCiudadesResult[0].mismoNombre == 1){
                        ngNotify.set('ERROR, Ya existe una ciudad con el mismo nombre.', 'warn');
                    }else{
                        ngNotify.set('ERROR, al añadir una ciudad nueva.', 'warn');
                        $state.reload('home.catalogos.ciudades');
                        cancel();
                    }
                });
            /*}else{
                 ngNotify.set('ERROR, Para añadir una nueva ciudad, se tiene que ingresar mínimo una relación.', 'warn');
            }*/
        }

        function OpenUpdateCiudad(IdMunicipio){
            var IdMunicipio = IdMunicipio;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/ModalCiudadForm.html',
                controller: 'ModalCiudadFormUpdateCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'md',
                resolve: {
                    IdMunicipio: function () {
                        return IdMunicipio;
                    }
                }
            });
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.Titulo = 'Nuevo Registro';
        vm.Icono = 'fa fa-plus';
        vm.ShowEdit = false;
        vm.RelEstList = [];
        vm.RelEstViewList = [];
        vm.AddRelEst = AddRelEst;
        vm.DeleteRelEst = DeleteRelEst;
        vm.SaveCiudad = SaveCiudad;
        vm.cancel = cancel;
        initData();

    });