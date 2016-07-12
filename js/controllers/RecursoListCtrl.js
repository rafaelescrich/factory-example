(function() {
    'use strict';

    angular.module('RecursoListCtrl', [])
      .controller('RecursoListController',
        function($scope, $stateParams, Recursos) {

          Recursos.getAll(function(data) {
            console.log(data);
            $scope.recursos = data;
          });

        });
})();
