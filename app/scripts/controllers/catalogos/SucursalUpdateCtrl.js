'use strict';

angular
    .module('softvApp')
    .controller('SucursalUpdateCtrl', function (CatalogosFactory, ngNotify, $rootScope, $state, $stateParams, atencionFactory) {





        function initData() {
            CatalogosFactory.GetDeepSucursal(Clv_Sucursal).then(function (data) {
                var DatosSucursal = data.GetDeepSUCURSALESResult;
                vm.BaseIdUser = DatosSucursal.BaseIdUser;
                vm.BaseRemoteIp = DatosSucursal.BaseRemoteIp;
                vm.CP = DatosSucursal.CP;
                vm.Calle = DatosSucursal.Calle;
                vm.Ciudad = DatosSucursal.Ciudad;
                vm.Clv_Equivalente = DatosSucursal.Clv_Equivalente;
                vm.Clv_Sucursal = DatosSucursal.Clv_Sucursal;
                vm.Colonia = DatosSucursal.Colonia;
                vm.Contacto = DatosSucursal.Contacto;
                vm.Email = DatosSucursal.Email;
                vm.Horario = DatosSucursal.Horario;
                vm.IP = DatosSucursal.IP;
                vm.Impresora = DatosSucursal.Impresora;
                vm.Impresora_Tickets = DatosSucursal.Impresora_Tickets;
                vm.Impresora_contratos = DatosSucursal.Impresora_contratos;
                vm.Impresora_tarjetas = DatosSucursal.Impresora_tarjetas;
                vm.Matriz = DatosSucursal.Matriz;
                vm.Municipio = DatosSucursal.Municipio;
                vm.Nombre = DatosSucursal.Nombre;
                vm.Numero = DatosSucursal.Numero;
                vm.Referencia = DatosSucursal.Referencia;
                vm.Serie = DatosSucursal.Serie;
                vm.Telefono = DatosSucursal.Telefono;
                vm.UltimoFolioUsado = DatosSucursal.UltimoFolioUsado;
                vm.idcompania = DatosSucursal.idcompania;
                console.log(vm.idcompania);
                atencionFactory.getPlazas().then(function (data) {                    
                    vm.plazas = data.GetMuestra_Compania_RelUsuarioListResult;
                    vm.plazas.forEach(function (item, index) {                        
                        console.log(item,index);
                        if (item.id_compania === vm.idcompania) {                           
                            vm.Plaza = vm.plazas[index];
                        }
                    });
                    
                });
            });


        }


        function SaveSucursal() {

            var objSUCURSALES = {};
            objSUCURSALES.Clv_Sucursal = vm.Clv_Sucursal;
            objSUCURSALES.Nombre = vm.Nombre;
            objSUCURSALES.IP = vm.IP;
            objSUCURSALES.Impresora = vm.Impresora;
            objSUCURSALES.Clv_Equivalente = vm.Clv_Equivalente;
            objSUCURSALES.Serie = vm.Serie;
            objSUCURSALES.UltimoFolioUsado = vm.UltimoFolioUsado;
            objSUCURSALES.idcompania = (vm.plazas == undefined) ? 0 : vm.Plaza.id_compania;
            objSUCURSALES.Matriz = (vm.Matriz == 'S') ? 1 : 0;
            objSUCURSALES.Impresora_contratos = vm.Impresora_contratos;
            objSUCURSALES.Impresora_tarjetas = vm.Impresora_tarjetas;
            objSUCURSALES.Impresora_Tickets = vm.Impresora_Tickets;
            objSUCURSALES.Calle = vm.Calle;
            objSUCURSALES.Numero = vm.Numero;
            objSUCURSALES.Colonia = vm.Colonia;
            objSUCURSALES.CP = vm.CP;
            objSUCURSALES.Municipio = vm.Municipio;
            objSUCURSALES.Ciudad = vm.Ciudad;
            objSUCURSALES.Telefono = vm.Telefono;
            objSUCURSALES.Horario = vm.Horario;
            objSUCURSALES.Referencia = vm.Referencia;
            objSUCURSALES.Contacto = vm.Contacto;
            objSUCURSALES.Email = vm.Email;
            CatalogosFactory.UpdateSucursal(objSUCURSALES).then(function (data) {
                console.log(data);
                if (data.UpdateSUCURSALESResult > 0) {
                    ngNotify.set('CORRECTO, se actualizo la sucursal correctamente.', 'success');
                    $state.go('home.catalogos.sucursales');
                } else {
                    ngNotify.set('ERROR, al actualizar la sucursal .', 'warn');
                    $state.go('home.catalogos.sucursales');
                }
            });
        }



        var vm = this;
        var Clv_Sucursal = $stateParams.id;
        vm.Titulo = 'Sucursal Editar - ' + Clv_Sucursal;
        vm.blocksave = false;
        vm.blockcancel = false;
        vm.blockreturn = true;
        vm.SaveSucursal = SaveSucursal;
        initData();

    });