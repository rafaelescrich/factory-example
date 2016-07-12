(function() {
    'use strict';

    angular.module('Myapp', [
        'ngResource',
        'ui.router',
        'appRoutes',
        'RecursoService',
        'UsuarioService',
        'RecursoListCtrl',
        'RecursoDetailsCtrl',
        'UsuarioDetailsCtrl',
        'HomeCtrl'
    ]);

})();
