/* criar um objeto */
const pessoa = {
    nome: 'Geovanna',
    data: '1998',
    email: 'geovanna.t.bamberg@gmail.com',
    confirmandoEmail: 'geovanna.t.bamberg@gmail.com',
    senha: '35413590',
    confirmandoSenha: 'geovanna.t.bamberg@gmail.com'
}

console.log(pessoa['nome']);

// criar um objeto add aos poucos
const pessoa1 = new Object();
pessoa1.nome='luiz';
pessoa1.data='20-10-1999';

// notação de um objeto com cochete pode ser usado para colocar variaveis no lugar de chaves do objeto;
console.log(pessoa['nome'], pessoa1['nome']);

// deletar um objeto
delete pessoa1.nome;

console.log(pessoa['nome'], pessoa1['nome']);

// uma funtion totalmente em função do objeto
pessoa.falarNome = function() {
    console.log(` ${this.nome} esta falando seu nome.`)
}

pessoa.falarNome()

// uma funtion totalmente em função do objeto assim criando chave com uma interação 
pessoa.getdata= function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear()-Number(this.data)
}

console.log (`${pessoa.nome} tem ${pessoa.getdata()} anos`)

/* construtor de array: 

const pessoas = new array(); */

// array com objetos
var pessoas = [];
const yves = {
    nome: 'Ha Sooyoung',
    data: '24-05-1997',
    nacionalidade: 'Coreia'
}
const chuu = {
    nome: 'Kim Jiwoo',
    data: '20-10-1999',
    nacionalidade: 'Coreia'
}
pessoas.push(yves)
pessoas.push(chuu)

console.log (pessoas)
// Usando for in para mostrar todas chaves dentro do ojeto

for (let chaves in pessoa){
    console.log(chaves)
}

// OBS: Quando functions estão dentro de objetos chamamos de métados


// Constructor function
function criarPessoa(nome, sobrenome) {
    return{
        nome,
        sobrenome,
        get nomecompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}
const p1 = criarPessoa('geovanna', 'bamberg');
console.log(p1.nomecompleto)