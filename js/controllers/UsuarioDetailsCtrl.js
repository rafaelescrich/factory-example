(function() {
    'use strict';

    angular.module('UsuarioDetailsCtrl', [])
      .controller('UserDetailsController',
        function($scope, $routeParams, Usuario) {

          var id = $routeParams.id;

          User.getOne(id, function(data) {
              $scope.user = data;
          });
        });
})();
