(function() {
  'use strict';

  angular.module('appRoutes', [])
  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

          $stateProvider
                .state('home', {
                    url: "/home",
                    templateUrl: "../templates/pagina_home/home.html",
                    controller: 'HomeCtrl'

                })

                .state('busca', {
                    url: "/busca",
                    templateUrl: "../templates/pagina_busca/busca.html",
                    controller: 'RecursoListCtrl'

                })

                .state('recurso', {
                    url: "/recurso",
                    templateUrl: "../templates/pagina_recurso/recurso.html",
                    controller: 'RecursoDetailsCtrl'

                })

                .state('usuario', {
                    url: "/usuario",
                    templateUrl: "../templates/pagina_usuario/usuario.html",
                    controller: 'UsuarioDetailsCtrl'

                })

      }
    ]);
})();
