(function () {
  'use strict';

  angular
    .module('contatooh')
    .factory('meuInterceptor', meuInterceptor);

  meuInterceptor.$inject = ['$q', '$location'];
  function meuInterceptor($q, $location) {
    /*
    ** Usamos o $location p/ processarmos a rota /auth apenas se o status for 401 (Ñ Autorizado).
    ** No final usamos $q.reject p/ que a promise daquela resposta seja rejeitada.
    */
    var meuInterceptor = {
      responseError: function (resposta) {
        if (resposta.status == 401) {
          $location.path('/auth');
        }
        return $q.reject(resposta);
      }
    }

    return meuInterceptor;
  }
})();