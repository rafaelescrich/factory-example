(function() {
    'use strict';

    angular.module('UserDetailsCtrl', [])
      .controller('UserDetailsController',
        function($scope, $routeParams, Usuario) {

          var id = $routeParams.id;

          User.getOne(id, function(data) {
              $scope.user = data;
          });
        });
})();
