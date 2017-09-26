'use strict';

angular
  .module('softvApp')
  .controller('SectoresCtrl', function (CatalogosFactory, atencionFactory,$uibModal) {

   
    function AddSector() {
        var modalInstance = $uibModal.open({
          animation: true,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'views/area tecnica/ModalSector.html',
          controller: 'ModalAddSectorCtrl',
          controllerAs: 'ctrl',
          backdrop: 'static',
          keyboard: false,
          class: 'modal-backdrop fade',
          size: 'md'
        });
      }
      function DetalleSector() {
        var modalInstance = $uibModal.open({
          animation: true,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'views/area tecnica/ModalSector.html',
          controller: 'ModalDetalleSectorCtrl',
          controllerAs: 'ctrl',
          backdrop: 'static',
          keyboard: false,
          class: 'modal-backdrop fade',
          size: 'md'
        });
      }
      

      function UpdateSector() {
        var modalInstance = $uibModal.open({
          animation: true,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'views/area tecnica/ModalSector.html',
          controller: 'ModalUpdateSectorCtrl',
          controllerAs: 'ctrl',
          backdrop: 'static',
          keyboard: false,
          class: 'modal-backdrop fade',
          size: 'md'
        });
      }
      
      function EliminaSector() {
        var modalInstance = $uibModal.open({
          animation: true,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'views/area tecnica/ModalEliminarSector.html',
          controller: 'ModalDeleteSectorCtrl',
          controllerAs: 'ctrl',
          backdrop: 'static',
          keyboard: false,
          class: 'modal-backdrop fade',
          size: 'sm'
        });
      }
      





    var vm = this;
    vm.AddSector = AddSector;
    vm.UpdateSector = UpdateSector;
    vm.EliminaSector = EliminaSector;
    vm.DetalleSector = DetalleSector;

  });
