'use strict'
angular
    .module('softvApp')
    .controller('ServicioAddCtrl', function(CatalogosFactory, ngNotify, $uibModal, $state, $stateParams, $rootScope){

        function initData(){
            CatalogosFactory.GetMUESTRATRABAJOS_NewList(vm.Clv_TipSer).then(function(data){
                console.log(data);
                vm.TrabajoList = data.GetMUESTRATRABAJOS_NewListResult;
            });

            CatalogosFactory.GetTipoClienteList_WebSoftvnew().then(function(data){
                console.log(data);
                vm.TipoCobroList = data.GetTipoClienteList_WebSoftvnewResult;
            });
        }

        function SaveServicios(){
            if(vm.Clv_TipSer == 1){
                SaveServicio1();
            }else if(vm.Clv_TipSer == 2){
                SaveServicio2();
            }else if(vm.Clv_TipSer == 3){
                SaveServicio3();
            }
        }
        
        function SaveServicio1(){
            console.log('1');
        }
        
        function SaveServicio2(){
            console.log('2');
            var objServicios_New = {
                'Clv_TipSer': vm.Clv_TipSer,
                'Descripcion': vm.Descripcion,
                'Clv_Txt': vm.Clave,
                'AplicanCom': (vm.AplicaComision == 'Y') ? 1 : 0,
                'Sale_en_Cartera': (vm.CobroMensual == 'Y') ? 1 : 0,
                'Precio': (vm.Precio != undefined) ? vm.Precio : 0,
                'Genera_Orden': (vm.GeneraOrden == 'Y') ? 1 : 0,
                'Es_Principal': (vm.Principal == 'Y') ? 1 : 0,
                'idcompania': 0,
                'EsToken': 0,
                'Gb': 0
            };
            CatalogosFactory.AddServicios_New(objServicios_New).then(function(data){
                console.log(data);
                var Clv_Servicio = data.AddServicios_NewResult;
                if(Clv_Servicio > 0){
                    CatalogosFactory.DeleteBORRel_Trabajos_NoCobroMensual(Clv_Servicio).then(function(data){
                        console.log(data);
                        var BorrarTrabajo = data.DeleteBORRel_Trabajos_NoCobroMensualResult;
                        if(BorrarTrabajo == -1){
                            if(vm.GeneraOrden == 'Y'){
                                console.log('Trabajo ok');
                                AddTrabajo(Clv_Servicio);
                            }else{
                                console.log('Trabajo not');
                                ValidaSoloInternet(Clv_Servicio);
                            }
                        }else{
                            ngNotify.set('ERROR, al borrar trabajos.', 'warn');
                            $state.go('home.catalogos.servicios');
                        }
                    });
                }else{
                    ngNotify.set('ERROR, al añadir un servicio nuevo.', 'warn');
                    $state.go('home.catalogos.servicios');
                }
            });
        }

        function SaveServicio3(){
            console.log('3');
            /*var objNUEVOClv_Equi = {
                "Clv_txt": "98765",
                "Clv_Equivalente": "98765"
            };
            CatalogosFactory.objNUEVOClv_Equi().then(function(data){
                console.log(data);
            });*/
        }

        function AddTrabajo(Clv_Servicio){
            console.log('AddTrabajo');
            console.log(Clv_Servicio);
            console.log(vm.Trabajo.Clv_Trabajo);
            var objGUARDARel_Trabajos_NoCobroMensual = {
                'Clv_Servicio': Clv_Servicio,
                'Clv_Trabajo': vm.Trabajo.Clv_Trabajo
            };
            CatalogosFactory.UpdateGUARDARel_Trabajos_NoCobroMensual(objGUARDARel_Trabajos_NoCobroMensual).then(function(data){
                console.log(data);
                if(data.UpdateGUARDARel_Trabajos_NoCobroMensualResult == -1){
                    ValidaSoloInternet(Clv_Servicio);
                }else{
                    ngNotify.set('ERROR, al agregar un trabajo.', 'warn');
                    $state.go('home.catalogos.servicios');
                }
            });
        }

        function ValidaSoloInternet(Clv_Servicio){
            var objValidaAplicaSoloInternet = {
                'Clv_Servicio': Clv_Servicio
            };
            CatalogosFactory.AddValidaAplicaSoloInternet(objValidaAplicaSoloInternet).then(function(data){
                console.log(data);
                var ValildaInternetResult = data.AddValidaAplicaSoloInternetResult;
                if(ValildaInternetResult == 0){
                    console.log('0');
                    var objNueAplicaSoloInternet = {
                        'Clv_Servicio': Clv_Servicio
                    }
                    CatalogosFactory.AddNueAplicaSoloInternet(objNueAplicaSoloInternet).then(function(data){
                        console.log(data);
                        if(data.AddNueAplicaSoloInternetResult == -1){
                            ngNotify.set('CORRECTO, se añadió un servicio nuevo.', 'success');
                            $state.go('home.catalogos.servicios');
                        }else{
                            ngNotify.set('ERROR, al añadir un servicio nuevo.', 'warn');
                            $state.go('home.catalogos.servicios');
                        }
                    });
                }else if(ValildaInternetResult == 1){
                    console.log('1');
                    CatalogosFactory.DeleteBorAplicaSoloInternet(Clv_Servicio).then(function(data){
                        console.log(data);
                        if(data.DeleteBorAplicaSoloInternetResult == -1){
                            ngNotify.set('CORRECTO, se añadió un servicio nuevo.', 'success');
                            $state.go('home.catalogos.servicios');
                        }else{
                            ngNotify.set('ERROR, al añadir un servicio nuevo.', 'warn');
                            $state.go('home.catalogos.servicios');
                        }
                    });
                }else{
                    console.log('N');
                    ngNotify.set('ERROR, al validar el servicio nuevo.', 'warn');
                    $state.go('home.catalogos.servicios');
                }
            });
        }

        /*function SetTipoCobroTab(){
            vm.TipoCobroResult = [{
                'CLV_TIPOCLIENTE': vm.TipoCobro.CLV_TIPOCLIENTE,
                'DESCRIPCION': vm.TipoCobro.DESCRIPCION
            }];
            console.log(vm.TipoCobroResult);
        }*/

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
        
        function OpenAddConcepto(Clv_TipoCobro){
            var Clv_TipoCobro = Clv_TipoCobro;
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
                size: 'md',
                resolve: {
                    Clv_TipoCobro: function () {
                        return Clv_TipoCobro;
                    }
                }
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
        //vm.SetTipoCobroTab = SetTipoCobroTab;
        console.log(vm.Clv_TipSer);
        initData();
    });