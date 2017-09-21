'use strict'
angular
    .module('softvApp')
    .controller('ServicioUpdateCtrl', function(CatalogosFactory, ngNotify, $uibModal, $state, $stateParams, $rootScope){

        function initData(){
            CatalogosFactory.GetDeepServicios_New(Clv_Servicio).then(function(data){
                console.log(data);
                var Servicio = data.GetDeepServicios_NewResult;
                if(Servicio != null){
                    vm.Clv_Servicio = Servicio.Clv_Servicio;
                    vm.Clv_TipSer = Servicio.Clv_TipSer;
                    vm.Descripcion = Servicio.Descripcion;
                    vm.Clave = Servicio.Clv_Txt;
                    vm.AplicaComision = (Servicio.AplicanCom == true)? 'Y' : 'N';
                    vm.CobroMensual = (Servicio.Sale_en_Cartera == true)? 'Y' : 'N';
                    vm.GeneraOrden = (Servicio.Genera_Orden == true)? 'Y' : 'N';
                    vm.Principal = (Servicio.Es_Principal == true)? 'Y' : 'N';
                    vm.Precio = (Servicio.Precio > 0)? Servicio.Precio : 0;
                }else{
                    ngNotify.set('ERROR, El servicio que seleccionó no se encuentra registrado.', 'warn');
                    $state.go('home.catalogos.servicios');
                }
            });
        }

        function OpenConfigurar(){
            var Clv_Servicio = vm.Clv_Servicio;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/ModalConfiguracionForm.html',
                controller: 'ModalConfiguracionAddCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'lg',
                resolve: {
                    Clv_Servicio: function () {
                        return Clv_Servicio;
                    }
                }
            });
        }

        function SaveServicios(){
            var ObjValidaCambio = {
                'clv_servicio': vm.Clv_Servicio,
                'Clv_Txt': vm.Clave
            };
            CatalogosFactory.GetDeepValidaCambioDClvtxtServ(ObjValidaCambio).then(function(data){
                console.log(data);
                var MsjExt = data.GetDeepValidaCambioDClvtxtServResult.MSJ;
                    var objServicios_New = {
                    'Clv_Servicio': vm.Clv_Servicio,
                    'Clv_TipSer': vm.Clv_TipSer,
                    'Descripcion': vm.Descripcion,
                    'Clv_Txt': vm.Clave,
                    'AplicanCom': (vm.AplicaComision == 'Y') ? 1 : 0,
                    'Sale_en_Cartera': (vm.CobroMensual == 'Y') ? 1 : 0,
                    'Precio': (vm.Precio != undefined) ? vm.Precio : 0,
                    'Genera_Orden': (vm.GeneraOrden == 'Y') ? 1 : 0,
                    'Es_Principal': (vm.Principal == 'Y') ? 1 : 0,
                    'Concepto': 'x',
                    'EsToken': 0,
                    'Gb': 0
                };
                CatalogosFactory.UpdateServicios_New(objServicios_New).then(function(data){
                    console.log(data);
                    if(data.UpdateServicios_NewResult == -1){
                        if(MsjExt != null){
                            var MSJ = 'NOTA:' + MsjExt + ' CORRECTO, se guardó el servicio.';
                        }else{
                            var MSJ = 'CORRECTO, se guardó el servicio.';
                        }
                        ngNotify.set(MSJ, 'success');
                        $state.go('home.catalogos.servicios');
                    }else{
                        if(MsjExt != null){
                            var MSJ = 'NOTA:' + MsjExt + ' ERROR, al guardar el servicio.';
                        }else{
                            var MSJ = 'ERROR, al guardar el servicio.';
                        }
                        ngNotify.set(MSJ, 'warn');
                        $state.go('home.catalogos.servicios');
                    }
                });
            });
        }
        
        function SetTipoCobro(){
            console.log(vm.CobroMensual);
            if(vm.CobroMensual == 'Y'){
                vm.ShowCobroMensual = true;
                vm.HideCobroMensual = false;
                vm.ShowOrden = false;
                vm.GeneraOrden = 'N';
                vm.AplicaComision = 'N';
            }
            else if(vm.CobroMensual == 'N'){
                vm.ShowCobroMensual = false;
                vm.HideCobroMensual = true;
                vm.ShowOrden = false;
                vm.GeneraOrden = 'N';
                vm.AplicaComision = 'N';
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
        vm.Titulo = 'Servicio Editar - ';
        var Clv_Servicio = $stateParams.id
        vm.ShowCobroMensual = false;
        vm.HideCobroMensual = true;
        vm.ShowOrden = false;
        vm.SetTipoCobro = SetTipoCobro;
        vm.SetOrden = SetOrden;
        vm.OpenAddConcepto = OpenAddConcepto;
        vm.SaveServicios = SaveServicios;
        vm.OpenConfigurar = OpenConfigurar;
        console.log(Clv_Servicio);
        initData();
    });