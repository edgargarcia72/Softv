'use strict';

angular
    .module('softvApp')
    .controller('SucursalAddCtrl', function (CatalogosFactory, ngNotify, $rootScope, $state, atencionFactory) {


        function initData() {


            atencionFactory.getPlazas().then(function (data) {
                console.log(data.GetMuestra_Compania_RelUsuarioListResult);
                vm.plazas = data.GetMuestra_Compania_RelUsuarioListResult;
                
            });

        }
         



        function SaveSucursal() {
            
            var SUCURSALESobj = {};
            SUCURSALESobj.Clv_Sucursal = vm.Clv_Sucursal;
            SUCURSALESobj.Nombre = vm.Nombre;
            SUCURSALESobj.IP = vm.IP;
            SUCURSALESobj.Impresora = vm.Impresora;
            SUCURSALESobj.Clv_Equivalente = vm.Clv_Equivalente;
            SUCURSALESobj.Serie = vm.Serie;
            SUCURSALESobj.UltimoFolioUsado = vm.UltimoFolioUsado;
            SUCURSALESobj.Clv_Equivalente = "null";
            SUCURSALESobj.idcompania = (vm.plazas == undefined) ? 0 : vm.Plaza.id_compania;
            SUCURSALESobj.Matriz = (vm.Matriz=='S') ? 1:0 ;
            SUCURSALESobj.Impresora_contratos = vm.Impresora_contratos;
            SUCURSALESobj.Impresora_tarjetas = vm.Impresora_tarjetas;
            SUCURSALESobj.Impresora_Tickets = vm.Impresora_Tickets;
            SUCURSALESobj.Calle = vm.Calle;
            SUCURSALESobj.Numero = vm.Numero;
            SUCURSALESobj.Colonia = vm.Colonia;
            SUCURSALESobj.CP = vm.CP;
            SUCURSALESobj.Municipio = vm.Municipio;
            SUCURSALESobj.Ciudad = vm.Ciudad;
            SUCURSALESobj.Telefono = vm.Telefono;
            SUCURSALESobj.Horario = vm.Horario;
            SUCURSALESobj.Referencia = vm.Referencia;
            SUCURSALESobj.Contacto = vm.Contacto;
            SUCURSALESobj.Email = vm.Email;
            CatalogosFactory.AddSucursal(SUCURSALESobj).then(function (data) {
                console.log(data);
                if (data.AddSucursalResult > 0) {
                    ngNotify.set('CORRECTO, se añadió una sucursal nueva.', 'success');
                    $state.go('home.catalogos.sucursales');
                } else {
                    ngNotify.set('ERROR, al añadir una sucursal nuevo.', 'warn');
                    $state.go('home.catalogos.sucursales');
                }
            });
        }

        var vm = this;
        vm.Titulo = 'Sucursal Nueva';
        vm.SaveSucursal = SaveSucursal;
        vm.blockreturn = true;
        initData();

    });