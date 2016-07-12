(function() {
    'use strict';

    angular.module('RecursoService', [])
      .factory('Recursos', ['$http',
        function($http) {
            return {
                getAll: function(callback) {
                    $http({
                        method: 'get',
                        url: 'http://portalmecapi.c3sl.ufpr.br/v1/learning_objects'
                    }).success(function(data) {
                        //console.log(data);
                        callback(data);
                    }).error(function() {
                        alert("error");
                    });
                },
                getOne: function(id, callback) {
                    $http({
                        method: 'get',
                        url: 'http://portalmecapi.c3sl.ufpr.br/v1/learning_objects/' + id + '?obba='
                    }).success(function(data) {
                        //console.log(data);
                        callback(data);
                    }).error(function() {
                        alert("error");
                    });
                }
               /*,create: function(productData) {
                    return $http.post('/api/products', productData);
                },
                delete: function(id) {
                    return $http.delete('/api/products/' + id);
                }*/
            };
        }
    ]);
})();
