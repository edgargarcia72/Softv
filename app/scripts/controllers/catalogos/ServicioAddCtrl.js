'use strict'
angular
    .module('softvApp')
    .controller('ServicioAddCtrl', function(CatalogosFactory, ngNotify, $uibModal, $state, $stateParams, $rootScope){

        function SaveServicios(){
            var objServicios_New = {
                "Clv_TipSer": vm.Clv_TipSer,
                "Descripcion": vm.Descripcion,
                "Clv_Txt": vm.Clave,
                "AplicanCom": (vm.AplicaComision == 'Y') ? 1 : 0,
                "Sale_en_Cartera": 0,
                "Precio": vm.Precio,
                "Genera_Orden": (vm.GeneraOrden == 'Y') ? 1 : 0,
                "Es_Principal": (vm.Principal == 'Y') ? 1 : 0,
                "idcompania": 0,
                "EsToken": 0,
                "Gb": 0
            };
            CatalogosFactory.AddServicios_New(objServicios_New).then(function(data){
                console.log(data);
                var Clv_Servicio = data.AddServicios_NewResult;
                if(Clv_Servicio > 0){
                    CatalogosFactory.DeleteBORRel_Trabajos_NoCobroMensual(Clv_Servicio).then(function(data){
                        console.log(data);
                        var BorrarTrabajo = data.DeleteBORRel_Trabajos_NoCobroMensualResult;
                        if(BorrarTrabajo == -1){
                            var objValidaAplicaSoloInternet = {
                                'Clv_Servicio': Clv_Servicio
                            };
                            CatalogosFactory.AddValidaAplicaSoloInternet(objValidaAplicaSoloInternet).then(function(data){///next
                                console.log();
                                var ValildaInternetResult = data.AddValidaAplicaSoloInternetResult;
                                if(ValildaInternetResult == 0){
                                    CatalogosFactory.AddNueAplicaSoloInternet(Clv_Servicio).then(function(data){
                                        console.log(data);
                                    });
                                }else if(ValildaInternetResult == 1){
                                    CatalogosFactory.DeleteBorAplicaSoloInternet(Clv_Servicio).then(function(data){
                                        console.log(data);
                                    });
                                }else{
                                    ngNotify.set('ERROR, al validar el servicio nuevo.', 'warn');
                                    $state.go('home.catalogos.servicios');
                                }
                            });
                        }else{
                            ngNotify.set('ERROR, al borrar trabajos.', 'warn');
                            $state.go('home.catalogos.servicios');
                        }
                    });
                    /*ngNotify.set('CORRECTO, se añadió un servicio nuevo.', 'success');
                    $state.reload('home.catalogos.servicios');
                    cancel();*/
                }else{
                    ngNotify.set('ERROR, al añadir un servicio nuevo.', 'warn');
                    $state.go('home.catalogos.servicios');
                }
            });
        }

        function SetTipoCobro(){
            console.log(vm.CobroMensual);
            if(vm.CobroMensual == 'Y'){
                vm.ShowCobroMensual = true;
                vm.HideCobroMensual = false;
                vm.ShowOrden = false;
                vm.GeneraOrden = 'N';
            }
            else if(vm.CobroMensual == 'N'){
                vm.ShowCobroMensual = false;
                vm.HideCobroMensual = true;
                vm.ShowOrden = false;
                vm.GeneraOrden = 'N';
            }
        }

        function SetOrden(){
            console.log(vm.GeneraOrden);
            if(vm.GeneraOrden == 'Y'){
                vm.ShowOrden = true;
            }
            else if(vm.GeneraOrden == 'N'){
                vm.ShowOrden = false;
            }
        }
        
        function OpenAddConcepto(){
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/ModalConceptoForm.html',
                controller: 'ModalConceptoAddCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'md'
            });
        }

        var vm = this;
        vm.Titulo = 'Servicio Nuevo';
        vm.ShowCobroMensual = false;
        vm.HideCobroMensual = true;
        vm.ShowOrden = false;
        vm.Clv_TipSer = $stateParams.id;
        vm.SetTipoCobro = SetTipoCobro;
        vm.SetOrden = SetOrden;
        vm.OpenAddConcepto = OpenAddConcepto;
        vm.SaveServicios = SaveServicios;
        console.log(vm.Clv_TipSer);
    });