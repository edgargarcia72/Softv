(function () {
  'use strict';

  angular
    .module('softvApp')
    .controller('ModalInstalaServicioCtrl', ModalInstalaServicioCtrl);

  ModalInstalaServicioCtrl.inject = ['$uibModal', '$uibModalInstance', 'ordenesFactory', 'items', '$rootScope', 'ngNotify'];

  function ModalInstalaServicioCtrl($uibModal, $uibModalInstance, ordenesFactory, items, $rootScope, ngNotify, $localStorage) {
    var vm = this;
    vm.cancel = cancel;
    vm.guardar = guardar;
    vm.seleccionaMedio=seleccionaMedio;
    vm.Servicios=[];
    vm.SeleccionaMedio=SeleccionaMedio;
    vm.Eliminar=Eliminar;



    this.$onInit = function () {
        var Parametros = {
        'clv_orden': items.clv_orden
        };
        console.log('Parametros');
        console.log(Parametros);
        ordenesFactory.MuestraArbolServiciosAparatosPorinstalar(Parametros).then(function (resp) {
          console.log(resp);
          vm.treedata = resp.GetMuestraArbolServiciosAparatosPorinstalarListResult;

          //Para tener todas las ramas abiertas
          vm.expandedNodes=[];
          angular.forEach(vm.treedata, function(value, key) {
            vm.expandedNodes.push(value);
          });

          llenaTipoAparatos();


        });        
    }
      
    
    function seleccionaMedio(node){
      vm.NOM = '';
        var items_ = {
          'Clv_UnicaNet': node.Clv_UnicaNet
        };
        var modalInstance = $uibModal.open({
          animation: true,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'views/procesos/ModalAsignaMedio.html',
          controller: 'ModalAsignaMedioCtrl',
          controllerAs: 'ctrl',
          backdrop: 'static',
          keyboard: false,
          size: 'sm',
          resolve: {
            items: function () {
              return items_;
            }
          }
        });

        modalInstance.result.then(function(submitVar) {
            node.IdMedio=submitVar.IdMedio;
            node.Detalle=submitVar.Descripcion;
            llenaTipoAparatos();
        });




    }

    function llenaTipoAparatos(){
      //Llena el objeto con los servicios por instalar
      var todosTienenMedio=1;
      vm.Servicios=new Object();
      vm.Servicios.obj=new Object();
      vm.Servicios.obj.Id=0;
      vm.Servicios.Lst=[];

      angular.forEach(vm.treedata, function(value, key) {
        var aux=new Object();

        if (value.Clv_UnicaNet>0){
          aux.Clv_UnicaNet=value.Clv_UnicaNet;
          aux.idMedio=value.IdMedio;
          console.log(aux);
          vm.Servicios.Lst.push(aux);
          if (aux.idMedio==0){
            todosTienenMedio=0;
          }

        }
      });

      console.log('vm.Servicios');
      console.log(vm.Servicios);

      if (todosTienenMedio==1){
        ordenesFactory.MuestraTipoAparato(vm.Servicios).then(function (resp) {
          console.log(resp);
          vm.TipoAparatos = resp.GetMuestraTipoAparatoListResult;
        });
      }

    }

    function SeleccionaMedio(){
      //llena servicios posibles
      var Parametros = vm.Servicios;
      Parametros.obj.Id=vm.TipoAparato.IdArticulo
      console.log('Parametros');
      console.log(Parametros);

      ordenesFactory.MuestraServiciosRelTipoAparato(Parametros).then(function (resp) {
          console.log(resp);
          vm.AparatosPosibles = resp.GetMuestraServiciosRelTipoAparatoListResult;
        });

    }

    function Eliminar(){
      if (vm.selectednode.Clv_UnicaNet>0 && vm.selectednode.IdMedio>0){
        vm.selectednode.IdMedio=0;
        vm.selectednode.Detalle='';
        vm.selectednode.children=[];
      }
      else{
        delete vm.selectednode;
      }


      console.log(vm.selectednode);
    }




    function guardar() {

    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }
  }
})();
