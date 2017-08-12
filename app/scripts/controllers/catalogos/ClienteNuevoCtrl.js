'use strict';

angular
    .module('softvApp')
    .controller('ClienteNuevoCtrl', function(CatalogosFactory){

        function initData(){
            CatalogosFactory.GetPlazaList().then(function(data){
                vm.PlazaList = data.GetPlazaListResult;
            });

            CatalogosFactory.GetPeriodoCobroList().then(function(data){
                vm.PeriodoList = data.GetPeriodoCobroListResult;
            });

            /*CatalogosFactory.GetTipoClienteList_WebSoftvnew().then(function(data){
                console.log(data);
            });*/
            
        }

        function AddDatosPersonales(){
            console.log('OK');
        }

        function ValidateYearVen(){
            if(vm.YearVen > 2016){

            }
        }

        var vm = this;
        vm.TipoPersona = "1";
        vm.ValidateRFC = /^[A-Z]{4}\d{6}[A-Z]{3}$|^[A-Z]{4}\d{6}\d{3}$|^[A-Z]{4}\d{6}[A-Z]{2}\d{1}$|^[A-Z]{4}\d{6}[A-Z]{1}\d{2}$|^[A-Z]{4}\d{6}\d{2}[A-Z]{1}$|^[A-Z]{4}\d{6}\d{1}[A-Z]{2}$/;
        vm.AddDatosPersonales = AddDatosPersonales;
        vm.ValidateYearVen = ValidateYearVen;
        initData();
        
    });