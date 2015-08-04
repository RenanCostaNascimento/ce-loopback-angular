var app = angular.module('App', ['ngRoute', 'lbServices']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/disciplinas', {
        templateUrl: 'partials/cadastro-disciplina.html',
        controller: 'ControladorDisciplinas'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);
