(function () {
  'use strict';

  angular
    .module('contatooh')
    .factory('Contato', Contato);

  Contato.$inject = ['$resource'];
  function Contato($resource) {
    return $resource('/contatos/:id');
  }
})();