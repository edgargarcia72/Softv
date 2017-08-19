'use strict';

angular
    .module('softvApp')
    .controller('ModalEditarRefClienteCtrl', function($uibModalInstance, $uibModal, ObjRefCliente, CatalogosFactory, $state, $rootScope, ngNotify){

        function UpdateRefPersonal(){
            var ObjCliente = {};
            ObjCliente.DireccionRef = vm.DireccionRef;
            ObjCliente.EmailRef = vm.EmailRef;
            ObjCliente.IdContrato = vm.ObjRefCliente.IdContrato;
            ObjCliente.IdReferencia = vm.ObjRefCliente.IdReferencia;
            ObjCliente.NombreRef = vm.NombreRef;
            ObjCliente.OpcionProspecto = vm.ObjRefCliente.OpcionProspecto;
            ObjCliente.TelefonoRef = vm.TelefonoRef;
            CatalogosFactory.UpdateReferencia(ObjCliente).then(function(data){
                console.log(data);
                ngNotify.set('CORRECTO, se guardó referencia personal.', 'success');
                $rootScope.$emit('LoadRefPersonal', ObjCliente.IdContrato);
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
        vm.UpdateRefPersonal = UpdateRefPersonal;
        
    });