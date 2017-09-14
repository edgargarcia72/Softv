'use strict';
angular
    .module('softvApp')
    .controller('RolesWebCtrl', function(RolesFactory, $uibModal){

        function initData(){
            RolesFactory.GetRolList().then(function(data){
                vm.RolesList = data.GetRolListResult;
                if (vm.RolesList.length == 0) {
					vm.SinRegistros = true;
					vm.ConRegistros = false;
				} else {
					vm.SinRegistros = false;
					vm.ConRegistros = true;
				}
            });
        }

        function OpenAddRol(){
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/configuracion/ModalRolForm.html',
                controller: 'ModalRolAddCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'md'
            });
        }

        function OpenUpdateRol(IdRol){
            var IdRol = IdRol;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/configuracion/ModalRolForm.html',
                controller: 'ModalRolUpdateCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'md',
                resolve: {
                    IdRol: function () {
                        return IdRol;
                    }
                }
            });
        }

        function OpenDeleteRol(RolObj){
            var RolObj = RolObj;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/configuracion/ModalRolDelete.html',
                controller: 'ModalRolDeleteCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'sm',
                resolve: {
                    RolObj: function () {
                        return RolObj;
                    }
                }
            });
        }

        var vm = this;
        vm.OpenAddRol = OpenAddRol;
        vm.OpenUpdateRol = OpenUpdateRol;
        vm.OpenDeleteRol = OpenDeleteRol;
        initData();
    });