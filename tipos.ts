// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 24;
const avaliacao: number = 4.5;

// String
const nome: string = 'Lucas';

// Array
const idades: number[] = [23, 28, 45];
const idades2: Array<number> = [23, 28, 45];

// Tuple
let jogadores: [string, string, string];
jogadores = ['Hyoran', 'Keno', 'Allan'];

// Enum
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Reprovado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any
const retornoDaApi: any[] = [123, 'Lucas', false];
const retornoDaApi2: any[] = [
    //.........
];

// Void
function printarNaTela(msg: string): void {
    console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(objeto: object) {
    //...
}
criar({
    propriedade: 1,
})
//criar('Lucas') // Dá erro

// Never
function loopInfinito(): never {
    while(true) {

    }
}

function erro(mensagem: string): never {
    throw new Error(mensagem);
}

function falha(): never{
    return erro('Algo falhou');
}

// Union Types
function exibirNota(nota: number | string) {
    console.log(`A nota é ${nota}`);
}

exibirNota('10');
exibirNota(10);

// Alias

type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}

//type Funcionarios = Array<Funcionario>;
const funcionarios: Funcionario[] = [{
    nome: 'Fred',
    sobrenome: 'Gadelha',
    dataNascimento: new Date()

}, {
    nome: 'Bobusco',
    sobrenome: 'Gadelha',
    dataNascimento: new Date()
}];

function tratarFuncionarios(funcionarios: Funcionario[]) {
    for(let funcionario of funcionarios) {
        console.log('Nome do funcionário: ', funcionario.nome)
    }
}

let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string;
}
const contato: Contato = {
    nome: 'Fred',
    telefone1: '1323123123',
}
