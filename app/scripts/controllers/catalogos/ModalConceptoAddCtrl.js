'use strict';

angular
    .module('softvApp')
    .controller('ModalConceptoAddCtrl', function($uibModalInstance, $uibModal, CatalogosFactory, $state, $rootScope, ngNotify, ObjServicio){

        function initData(){
            CatalogosFactory.GetMUESTRASOLOTARIFADOSList().then(function(data){
                console.log(data);
                vm.TipoConceptoList = data.GetMUESTRASOLOTARIFADOSListResult;
                vm.TipoConcepto = vm.TipoConceptoList[0];
            });

            CatalogosFactory.GetDeepServicios_New(ObjServicio.Clv_Servicio).then(function(data){
                console.log(data);
                var Servicio = data.GetDeepServicios_NewResult;
                vm.Clv_Servicio = Servicio.Clv_Servicio;
                vm.Clv_TipSer = Servicio.Clv_TipSer;
                CatalogosFactory.GetMuestraTipoPromocionList(vm.Clv_TipSer).then(function(data){
                    console.log(data);
                    vm.TipoPromcionList = data.GetMuestraTipoPromocionListResult;
                });
                CatalogosFactory.GetMUESTRATRABAJOS_NewList(vm.Clv_TipSer).then(function(data){
                    console.log(data);
                    vm.TrabajoList = data.GetMUESTRATRABAJOS_NewListResult;
                });
            });
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

        function AddConcepto(){
            console.log('ok');
            var ObjDate = ToDate(vm.FechaInicio, vm.FechaFinal)
            var objValidaPeriodos = {
                'Fec_Ini': parseInt(ObjDate.FIY+ '' + '' + ObjDate.FIM + '' + ObjDate.FID),
                'Fec_Fin': parseInt(ObjDate.FFY+ '' + '' + ObjDate.FFM + '' + ObjDate.FFD),
                'Ini': ObjDate.FID,
                'Fin': ObjDate.FFD,
                'Clv_Servicio': vm.Clv_Servicio,
                'Clave': vm.TipoConcepto.Clave,
                'Clv_TipoCliente': vm.Clv_TipoCobro 
            }
            CatalogosFactory.AddValidaPeriodos(objValidaPeriodos).then(function(data){
                console.log(data);
                var result = data.AddValidaPeriodosResult;
                console.log(result);
                if(result == 0){
                    var objREL_TARIFADOS_SERVICIOS_New ={
                        'CLV_SERVICIO': 5321,
                        'CLAVE': 1,
                        'PRECIO': 10,
                        'DIA_INICIAL': 1,
                        'DIA_FINAL': 31,
                        'BRINCA_MES': 0,
                        'Periodo_Inicial': '20170101',
                        'Periodo_Final': '20170131',
                        'Porcetaje_Descuento': 0,
                        'Aplica_Comision': 0,
                        'Genera_Orden': 0,
                        'Precio_Adicional': 15,
                        'Vigente': 1,
                        'Porcetaje_Descuento_Adicional': 10,
                        'Clv_TipoPromocion': 0,
                        'Clv_Trabajo': 0,
                        'Numero_Cortesias': 0,
                        'Precio_Inalambrico': 0,
                        'Clv_TipoCliente': 1,
                        'Se_Cobra_Proporcional': 0
                    }
                }else{
                    console.log('Not');
                }
            });
            //console.log(ValidaFecha(objValidaPeriodos));
            /*if(ValidaFecha(objValidaPeriodos) == true){
                console.log('Valido');
            }else{
                console.log('invaslido');
            }*/
           //cancel();
        }

        function ValidaFecha(objValidaPeriodos){
            /*console.log(FechaInicio, FechaFinal);
            var ObjDate = ToDate(FechaInicio, FechaFinal);
            console.log(ObjDate);
            var objValidaPeriodos = {
                'Fec_Ini': parseInt(ObjDate.FIY+ '' + '' + ObjDate.FIM + '' + ObjDate.FID),
                'Fec_Fin': parseInt(ObjDate.FFY+ '' + '' + ObjDate.FFM + '' + ObjDate.FFD),
                'Ini': ObjDate.FID,
                'Fin': ObjDate.FFD,
                'Clv_Servicio': vm.Clv_Servicio,
                'Clave': vm.TipoConcepto.Clave,
                'Clv_TipoCliente': vm.Clv_TipoCobro 
            }*/
            
        }

        function ToDate(FechaInicio, FechaFinal){
            console.log('ToDate');
            var FIM = FechaInicio.getMonth() + 1;
            var FFM = FechaFinal.getMonth() + 1;
            var ObjDate = {
               'FID': FechaInicio.getDate(),
               'FIM': (String(FIM).length == 1)? '0'+FIM : FIM,
               'FIY': FechaInicio.getFullYear(),
               'FFD': FechaFinal.getDate(),
               'FFM': (String(FFM).length == 1)? '0'+FFM : FFM,
               'FFY': FechaFinal.getFullYear(),
            };
            return ObjDate;
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.ShowOrden = false;
        vm.SetOrden = SetOrden;
        vm.cancel = cancel;
        vm.AddConcepto = AddConcepto;
        vm.Clv_TipoCobro = ObjServicio.Clv_TipoCobro;
        console.log(ObjServicio);
        initData();

    });