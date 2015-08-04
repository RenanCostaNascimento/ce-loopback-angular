'use strict';

app.controller('Controlador', ['$scope', 'Disciplina', 'Professor', function($scope, Disciplina, Professor){
  $scope.professores = Professor.find();
  $scope.disciplinas = Disciplina.find();
  $scope.disciplina = {};
  $scope.professor = {};
  $scope.professorSelecionado = $scope.professores[0];

  $scope.salvarDisciplina = function(){
    $scope.disciplina.professorId = $scope.professorSelecionado.id;
    $scope.disciplinas.push(Disciplina.upsert($scope.disciplina));
    Materialize.toast('Disciplina cadastrada com sucesso.', 3000);
  }
  $scope.salvarProfessor = function(){
    $scope.professores.push(Professor.create($scope.professor));
    Materialize.toast('Professor cadastrado com sucesso.', 3000);
  }

  $scope.editarProfessor = function(){
    Professor.upsert($scope.professor);
    Materialize.toast('Professor editado com sucesso.', 3000);
  }
  $scope.editarDisciplina = function(){
    Disciplina.upsert($scope.disciplina);
    Materialize.toast('Disciplina editada com sucesso.', 3000);
  }

  $scope.carregarEdicaoDisciplina = function(disciplina){
    $scope.disciplina = disciplina;
  }
  $scope.carregarEdicaoProfessor = function(professor){
    $scope.professor = professor;
    $scope.professor.nascimento = new Date(professor.nascimento);
  }

  $scope.limparDisciplina = function(){
    $scope.disciplina = {};
  }
  $scope.limparProfessor = function(){
    $scope.professor = {};
  }

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
}]);
