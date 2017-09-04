'use strict';
angular
	.module('softvApp')
	.config(function($stateProvider) {
		var states = [{
				name: 'home.configuracion',
				abstract: true,
				template: '<div ui-view></div>'
			},
			{
				name: 'home.configuracion.permisos',
				data: {
					pageTitle: 'SAC | PERMISOS',
					permissions: {
						only: ['permisosSelect'],
						options: {
							reload: false
						}
					}
				},
				url: '/configuracion/permisos',
				templateUrl: 'views/configuracion/permisos.html',
				controller: 'PermisosCtrl',
				controllerAs: '$ctrl'
			},
			{
				name: 'home.configuracion.roles',
				data: {
					pageTitle: 'SAC | ROLES',
					permissions: {
						only: ['rolesSelect'],
						options: {
							reload: false
						}
					}
				},
				url: '/configuracion/roles',
				templateUrl: 'views/configuracion/roles.html',
				controller: 'RolCtrl',
				controllerAs: '$ctrl'
			},
			{
				name: 'home.configuracion.usuarios',
				data: {
					pageTitle: 'SAC | ROLES',
					permissions: {
						only: ['usuariosSelect'],
						options: {
							reload: false
						}
					}
				},
				url: '/configuracion/usuarios',
				templateUrl: 'views/configuracion/usuarios.html',
				controller: 'usuariosCtrl',
				controllerAs: '$ctrl'
			},
			{
				name: 'home.configuracion.nuevousuario',
				data: {
					pageTitle: 'SAC | USUARIOS',
					permissions: {
						only: ['usuariosSelect'],
						options: {
							reload: false
						}
					}
				},
				url: '/configuracion/nuevousuario',
				templateUrl: 'views/configuracion/nuevoUsuario.html',
				controller: 'nuevoUsuarioCtrl',
				controllerAs: '$ctrl'
			}


		];
		states.forEach(function(state) {
			$stateProvider.state(state);
		});
	});
