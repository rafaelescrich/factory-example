(function() {
    'use strict';

    angular.module('RecursoListCtrl', [])
      .controller('RecursoListController',
        function($scope, $routeParams, Recursos) {

          Recursos.getAll(function(data) {
            $scope.recursos = data;
          });
          
        });
})();
