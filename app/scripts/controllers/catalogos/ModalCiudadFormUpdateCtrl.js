'use strict';

angular
    .module('softvApp')
    .controller('ModalCiudadFormUpdateCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state, IdMunicipio){

        function initData(){
            CatalogosFactory.GetMuestraCiudadById(IdMunicipio).then(function(data){
                var Ciudad = data.GetMuestraCiudadByIdResult[0];
                vm.IdCiudad = Ciudad.Clv_Ciudad;
                vm.Ciudad = Ciudad.Nombre;
            });
            GetRelEstMun(IdMunicipio);
            GetEstadoList(IdMunicipio);
        }

        function GetEstadoList(IdMunicipio){
            CatalogosFactory.GetRelEstadoCiudad_NewList(IdMunicipio).then(function(data){
                console.log(data);
                vm.EstadoList = data.GetRelEstadoCiudad_NewListResult;
            });
        }

        function GetRelEstMun(IdMunicipio){
            var ObjMunicipio = {
                'Op': 3,
                'Clv_Ciudad': IdMunicipio 
            };
            console.log(ObjMunicipio);
            CatalogosFactory.GetMuestraRelEdoCd(ObjMunicipio).then(function(data){
                console.log(data);
                vm.RelEstList = data.GetMuestraRelEdoCdResult;
            });
        }

        function AddRelEst(){
            var objRelEstadoCiudad_New = {
                'Clv_Ciudad': vm.IdCiudad,
                'Clv_Estado': vm.Estado.Clv_Estado,
                'Op': 1
            };
            console.log(objRelEstadoCiudad_New);
            CatalogosFactory.AddRelEstadoCiudad_New(objRelEstadoCiudad_New).then(function(data){
                console.log(data);
                if(data.AddRelEstadoCiudad_NewResult == -1){
                    ngNotify.set('CORRECTO, se guardó relación.', 'success');
                    GetRelEstMun(vm.IdCiudad);
                    GetEstadoList(vm.IdCiudad);
                }else{
                    GetRelEstMun(vm.IdCiudad);
                    ngNotify.set('ERROR, al guardar relación.', 'warn');
                    $state.reload('home.catalogos.ciudades');
                    cancel();
                }
            });
            /*if(vm.Estado != undefined && vm.Estado != 0){
                var RelEst = {};
                RelEst.Clv_Ciudad = vm.IdCiudad;
                RelEst.Clv_Estado = vm.Estado.Clv_Estado;
                RelEst.Op = 1;
                var RelEstView = {};
                RelEstView.Clv_Ciudad = vm.IdCiudad;
                RelEstView.Clv_Estado = vm.Estado.Clv_Estado;
                RelEstView.Estado = vm.Estado.Nombre;
                if(ExistsRelEst(RelEst.Clv_Estado) == false){
                    vm.RelEstList = RelEst;
                    vm.RelEstViewList.push(RelEstView);
                }else{
                    ngNotify.set('ERROR, Ya existe esta relación.', 'warn');
                }
            }else{
                ngNotify.set('ERROR, Selecciona un estado.', 'warn');
            }*/
        }

        /*function ExistsRelEst(Clv_Estado){
            var ResultExists = 0;
            for(var i = 0; vm.RelEstList.length > i; i ++){
                if(vm.RelEstList[i].Clv_Estado == Clv_Estado){
                    ResultExists = ResultExists + 1
                }
            }
            return (ResultExists > 0)? true : false;
        }*/

        function DeleteRelEst(Clv_Estado){
            var ObjMunicipio = {
                "Op": 2,
                "Clv_Estado": Clv_Estado,
                "Clv_Ciudad": vm.IdCiudad
            };
            CatalogosFactory.DeleteRelEstadoCiudad_New(ObjMunicipio).then(function(data){
                if(data.DeleteRelEstadoCiudad_NewResult == -1){
                    ngNotify.set('CORRECTO, se eliminó relación.', 'success');
                    GetRelEstMun(vm.IdCiudad);
                    GetEstadoList(vm.IdCiudad);
                }else{
                    GetRelEstMun(vm.IdCiudad);
                    ngNotify.set('ERROR, al eliminar la relación.', 'warn');
                    $state.reload('home.catalogos.ciudades');
                    cancel();
                }
            });
            /*for(var i = 0; vm.RelEstList.length > i; i ++){
                if(vm.RelEstList[i].Clv_Estado == Clv_Estado){
                    vm.RelEstList.splice(i, 1);
                    vm.RelEstViewList.splice(i, 1);
                }
            }*/
        }

        function SaveCiudad(){
            //if(vm.RelEstList.length > 0){
                /*var lstRelEstado = {};
                lstRelEstado.IdMunicipio = vm.IdCiudad;
                lstRelEstado.Nombre = vm.Ciudad;*/
                
            /*}else{
                 ngNotify.set('ERROR, Para la ciudad, se tiene que ingresar mínimo una relación.', 'warn');
            }*/
        }
        
        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        console.log(IdMunicipio);
        vm.Titulo = 'Editar Registro - ';
        vm.Icono = 'fa fa-pencil-square-o';
        vm.ShowEdit = true;
        //vm.RelEstList = [];
        vm.RelEstViewList = [];
        vm.AddRelEst = AddRelEst;
        vm.DeleteRelEst = DeleteRelEst;
        vm.SaveCiudad = SaveCiudad;
        vm.cancel = cancel;
        initData();

    });