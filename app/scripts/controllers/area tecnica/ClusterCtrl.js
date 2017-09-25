'use strict';

angular
  .module('softvApp')
  .controller('ClusterCtrl', function (CatalogosFactory, atencionFactory,$uibModal) {

   
    function AddCluster() {
        var modalInstance = $uibModal.open({
          animation: true,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'views/area tecnica/ModalCluster.html',
          controller: 'ModalAddClusterCtrl',
          controllerAs: 'ctrl',
          backdrop: 'static',
          keyboard: false,
          class: 'modal-backdrop fade',
          size: 'md'
        });
      }
      function DetalleCluster() {
        var modalInstance = $uibModal.open({
          animation: true,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'views/area tecnica/ModalCluster.html',
          controller: 'ModalDetalleClusterCtrl',
          controllerAs: 'ctrl',
          backdrop: 'static',
          keyboard: false,
          class: 'modal-backdrop fade',
          size: 'md'
        });
      }
      

      function UpdateCluster() {
        var modalInstance = $uibModal.open({
          animation: true,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'views/area tecnica/ModalCluster.html',
          controller: 'ModalUpdateClusterCtrl',
          controllerAs: 'ctrl',
          backdrop: 'static',
          keyboard: false,
          class: 'modal-backdrop fade',
          size: 'md'
        });
      }
      
      function EliminaCluster() {
        var modalInstance = $uibModal.open({
          animation: true,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'views/area tecnica/ModalEliminarCluster.html',
          controller: 'ModalDeleteClusterCtrl',
          controllerAs: 'ctrl',
          backdrop: 'static',
          keyboard: false,
          class: 'modal-backdrop fade',
          size: 'sm'
        });
      }
      





    var vm = this;
    vm.AddCluster = AddCluster;
    vm.UpdateCluster = UpdateCluster;
    vm.EliminaCluster = EliminaCluster;
    vm.DetalleCluster = DetalleCluster;

  });
