(function() {
    'use strict';

    angular.module('RecursoListCtrl', [])
    angular.module('RecursoListCtrl', [])
      .controller('RecursoListController',
        function($scope, $stateParams, Recursos) {

          Recursos.getAll(function(data) {
            $scope.recursos = data;
          });

        });
})();
