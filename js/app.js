(function() {
    'use strict';

    angular.module('Myapp', [
        'ui.router',
        'appRoutes',
        'RecursoService',
        'RecursoListCtrl',
        'RecursoDetailsCtrl',
        'UsuarioDetailsCtrl',
        'UsuarioService'
    ]);

})();
