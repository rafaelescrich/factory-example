(function() {
    'use strict';

    angular.module('RecursoDetailsCtrl', [])
      .controller('RecursoDetailsController',
        function($scope, $stateParams, Recursos) {

          var id = $routeParams.id;

          Recursos.getOne(id, function(data) {
              $scope.recurso = data;
          });
        });
})();
