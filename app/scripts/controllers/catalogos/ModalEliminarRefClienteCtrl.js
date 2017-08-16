'use strict';

angular
    .module('softvApp')
    .controller('ModalEliminarRefClienteCtrl', function($uibModalInstance, $uibModal, ObjRefCliente, CatalogosFactory, $state, $rootScope){

        function DeletRefPersonal(){
            var IdReferencia = vm.ObjRefCliente.IdReferencia;
            CatalogosFactory.DeleteReferenciaCliente(IdReferencia).then(function(data){
                console.log(data);
                $rootScope.$emit('LoadRefPersonal', vm.ObjRefCliente.IdContrato);
                cancel();
            });
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.ObjRefCliente = ObjRefCliente;
        vm.NombreRef = ObjRefCliente.Nombre;
        vm.TelefonoRef = ObjRefCliente.Telefono;
        vm.EmailRef = ObjRefCliente.Email;
        vm.DireccionRef = ObjRefCliente.Direccion;
        vm.cancel = cancel;
        vm.DeletRefPersonal = DeletRefPersonal;
        
    });