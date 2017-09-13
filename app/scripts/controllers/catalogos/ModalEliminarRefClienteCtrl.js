'use strict';

angular
    .module('softvApp')
    .controller('ModalEliminarRefClienteCtrl', function($uibModalInstance, $uibModal, ObjRefCliente, CatalogosFactory, $state, $rootScope, ngNotify){

        function DeletRefPersonal(){
            var IdReferencia = vm.IdReferencia;
            CatalogosFactory.DeletetblReferenciasClietes(IdReferencia).then(function(data){
                if(data.DeletetblReferenciasClietesResult == -1){
                    ngNotify.set('CORRECTO, se eliminó la referencia personal.', 'success');
                    $rootScope.$emit('LoadRefPersonal', vm.IdContrato);
                    cancel();
                }else{
                    ngNotify.set('ERROR, al eliminar la referencia personal.', 'warn');
                    $rootScope.$emit('LoadRefPersonal', vm.IdContrato);
                    cancel();
                }
            });
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.IdReferencia = ObjRefCliente.id_referencia;
        vm.IdContrato = ObjRefCliente.contrato;
        vm.NombreRef = ObjRefCliente.nombre;
        vm.TelefonoRef = ObjRefCliente.telefono;
        vm.EmailRef = ObjRefCliente.email;
        vm.DireccionRef = ObjRefCliente.direccion;
        vm.cancel = cancel;
        vm.DeletRefPersonal = DeletRefPersonal;
        
    });