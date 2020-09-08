"use strict";
// Boolean
var contaPaga = false;
// Number
var idade = 24;
var avaliacao = 4.5;
// String
var nome = 'Lucas';
// Array
var idades = [23, 28, 45];
var idades2 = [23, 28, 45];
// Tuple
var jogadores;
jogadores = ['Hyoran', 'Keno', 'Allan'];
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Reprovado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
// Any
var retornoDaApi = [123, 'Lucas', false];
var retornoDaApi2 = [
//.........
];
// Void
function printarNaTela(msg) {
    console.log(msg);
}
// Null e Undefined
var u = undefined;
var n = null;
// Object
function criar(objeto) {
    //...
}
criar({
    propriedade: 1,
});
//criar('Lucas') // Dá erro
// Never
function loopInfinito() {
    while (true) {
    }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
// Union Types
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirNota('10');
exibirNota(10);
//type Funcionarios = Array<Funcionario>;
var funcionarios = [{
        nome: 'Fred',
        sobrenome: 'Gadelha',
        dataNascimento: new Date()
    }, {
        nome: 'Bobusco',
        sobrenome: 'Gadelha',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionário: ', funcionario.nome);
    }
}
var altura = 1.6;
altura = null;
var contato = {
    nome: 'Fred',
    telefone1: '1323123123',
};
// Type Assertion
var minhaIdade = 23;
minhaIdade.toString();
//(<number>minhaIdade).toString();
var input = document.getElementById("numero 1");
//const input =<HTMLInputElement>document.getElementById("numero 1");
console.log(input.value);
