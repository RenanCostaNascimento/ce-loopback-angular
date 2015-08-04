'use strict';

app.controller('ControladorDisciplinas', ['$scope', 'Disciplina', function($scope, Disciplina){
  $scope.disciplinas = Disciplina.find();
  $scope.disciplina = {};

  $scope.salvarDisciplina = function(){
    $scope.disciplinas.push(Disciplina.upsert($scope.disciplina));
    Materialize.toast('Disciplina cadastrada com sucesso.', 3000);
  }

  $scope.editarDisciplina = function(){
    Disciplina.upsert($scope.disciplina);
    Materialize.toast('Disciplina editada com sucesso.', 3000);
  }

  $scope.carregarEdicao = function(disciplina){
    $scope.disciplina = disciplina;
  }

  $scope.limpar = function(){
    $scope.disciplina = {};
  }
}]);


app.controller('ControladorProfessor', ['$scope', 'Professor', function($scope, Professor){

  

}]);
