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

  $scope.professores = Professor.find();
  $scope.professor = {};

  $scope.preencherEndereco = function(cep){
    if (cep.length != 8)
    {
      Materialize.toast('Formato do CEP inválido.', 3000);
      return;
    }

    var endereco_servico = "http://cep.correiocontrol.com.br/" + cep + ".json";

    $.ajax({url: endereco_servico}).success(function(objEndereco){
      $scope.professor.bairro = objEndereco.bairro;
      $scope.professor.rua = objEndereco.logradouro;
      $scope.professor.estado = objEndereco.uf;
      $scope.professor.cidade = objEndereco.localidade;
      $scope.professor.numero = 10;
      $scope.$apply();
    }).fail(function() {
      Materialize.toast('CEP não encontrado.', 3000);
    });
  }

  $scope.salvarProfessor = function(){
    $scope.professores.push(Professor.upsert($scope.professor));
    Materialize.toast('Professor cadastrado com sucesso.', 3000);
  }

  $scope.editarProfessor = function(){
    Professor.upsert($scope.professor);
    Materialize.toast('Professor editado com sucesso.', 3000);
  }

  $scope.carregarEdicao = function(professor){
    $scope.professor = professor;
    $scope.professor.nascimento = new Date(professor.nascimento);
  }

  $scope.limpar = function(){
    $scope.professor = {};
  }

}]);
