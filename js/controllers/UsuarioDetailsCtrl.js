(function() {
    'use strict';

    angular.module('UsuarioDetailsCtrl', [])
      .controller('UserDetailsController',
        function($scope, $stateParams, Usuario) {

          var id = $routeParams.id;

          User.getOne(id, function(data) {
              $scope.user = data;
          });
        });
})();
