'use strict';

angular
    .module('softvApp')
    .controller('ModalServicioDeleteCtrl', function(CatalogosFactory, $uibModalInstance, ngNotify, $state, ObjServicio){

        function initData(){
             vm.Clv_Servicio = ObjServicio.Clv_Servicio;
             vm.clv_txt = ObjServicio.clv_txt;
        }

        function DeleteServicio(){
            var ValidaDelete = {
                'clv_txt': vm.clv_txt,
                'Id': 0
            };
            CatalogosFactory.GetDeepValida_borra_servicio_New(ValidaDelete).then(function(data){
                console.log(data);
            });
            /*CatalogosFactory.DeleteServicios_New(vm.Clv_Servicio).then(function(data){
                console.log(data);
                if(data.DeleteServicios_NewResult == -1){
                    ngNotify.set('CORRECTO, se eliminó el servicio.', 'success');
                    $state.reload('home.catalogos.servicios');
				    cancel();
                }else{
                    ngNotify.set('ERROR, al eliminar el servicio.', 'warn');
                    $state.reload('home.catalogos.servicios');
				    cancel();
                }
            });*/
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.DeleteServicio = DeleteServicio;
        vm.cancel = cancel;
        initData();
    });