/*
 * Aula 12 do módulo 01
*/

const nome = 'Gabriel';
const idade = 22;

/* Object Short Syntax
 * Não preciso colocar mais atributos com o mesmo nome que objetos.

 usuario = {
    nome: nome,
    idade: idade,
    empresa: 'Kognita'
};

Basta colocar a variável que esteja definida acima dele, que o interpretador saberá que estou referenciando ela.
Isso se chama Object Short Syntax
*/
const usuario = {
    nome,
    idade,
    empresa: 'Kognita'
};

console.log(usuario);

/*
 * Aula 11 do módulo 01
*/

// const idade = 22;
// // isso é um Template Literals (variável dentro de uma string)
// console.log(`Gabriel tem ${ idade } anos`);

/*
 * Aula 10 do módulo 01
*/

// REST serve para a gent epegar o resto das propriedades

// const usuario = {
//     nome: 'Gabriel',
//     idade: '22',
//     empresa: 'Kognita'
// };

// // pegando o atributo nome, e o restante. O resto se torna um objeto que conterá os atributos que não foram pego
// const { nome, ...resto } = usuario;
// // nome = Gabriel
// // resto = { idade: "22", empresa: "Kognita" }

// console.log(nome);
// console.log(resto);

// const arr = [1, 2, 3, 4];

// const [a, b, ...c] = arr;
// // mesma coisa que de cima
// console.log(a, b, c);
// // a = 1
// // b = 2
// // c = [3, 4]

// // soma com resto
// function soma(a, b, ...params) {
//     return a + b + params.reduce((total, next) => total + next);
// };
// // a = 1
// // b = 2
// // params = [3, 4, 5]
// console.log(soma(1, 2, 3, 4, 5));

// // SPREAD serve para propagar (repassar) uma informação de uma estrutura de dados para outra estrutura

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// // montando um array a partir dos outros dois de cima [1, 2, 3, 4, 5, 6]
// const arr3 = [
//     ...arr1, ...arr2
// ];

// console.log(arr3);

// const usuario1 = {
//     nome: 'Gabriel',
//     idade: 22,
//     empresa: 'Kognita'
// };

// criando um objeto a partir de outro objeto, mas alterando o atributo nome
// const usuario2 = { ...usuario1, nome: 'Diego' };

// console.log(usuario2);

/*
 * Aula 09 do módulo 01
*/

// const usuario = {
//     nome: 'Gabriel',
//     idade: 22,
//     endereco: {
//         cidade: 'São Paulo',
//         estado: 'SP'
//     }
// };

// // Desestruturação de um objeto. Nesta linha eu pego os campos que eu quero (devo usar o mesmo nome de atributo)
// // a partir de um objeto
// const { nome, idade, endereco: { cidade } } = usuario;

// console.log(nome);
// console.log(idade);
// console.log(cidade);

// // posso usar a desestruturação para parâmetro de função
// function desestruturacaoDeObjeto({
//     nome, idade, endereco: { cidade }
// }) {
//     console.log(nome, idade, cidade);
// }

// desestruturacaoDeObjeto(usuario);

/*
 * Aula 08 do módulo 01
*/

// definindo valores padrões para um parametro
// function soma(a = 3, b = 6) {
//     return a + b;
// }

// console.log(soma());

// const subtrai = (a = 3, b = 6) => a - b;

// console.log(subtrai());

/*
 * Aula 07 do módulo 01
*/

// const arr = [1, 3, 4, 5, 6];

// // arrow function. É boa para função que recebe um parametro e retorna um valor
// // criando uma função que retorna um valor (item * 2) e tem como argumento um parametro (item)
// const newArr = arr.map(item => item * 2);

// console.log(newArr);

// const teste = () => {
//     return 'teste';
// };

// console.log(teste());

// // retornando um objeto a partir uma arrow function
// const teste2 = () => ({ name: 'Gabriel' });

// console.log(teste2());

/*
 * Aula 06 do módulo 01
*/

// const arr = [1, 3, 4, 5, 8, 9];
// // map(function()) percorre o Array e retorna cada elemento
// // o primeiro argumento pega o item, o segundo o indíce
// const newArr = arr.map(function(item, index) {
//     return item + index;
// });

// console.log(newArr);

// const sum = arr.reduce(function(total, next) {
//     return total + next;
// });

// console.log(sum);

// total = 0
// next = 1
// total = 1
// next = 3
// total = 4
// next = 4
// total = 8

// filtrando os elemento para capturar apenas os elementos par
// const filter = arr.filter(function(item) {
//     return item % 2 === 0;
// });

// console.log(filter);

// // o find serve para verificar se existe um elemento no array e retornar o mesmo
// const find = arr.find(function(item) {
//     return item === 4;
// });

// console.log(find);

// =============================================================================
/*
 * Aula 05 do módulo 01
*/

// eu consigo alterar os atributos de um objeto constante no javascript
// const usuario = { nome: 'Gabriel' };
// usuario.nome = 'Diego';

// =============================================================================
/*
 * Aula 04 do módulo 01
*/

// class List {
//     constructor() {
//         this.data = [];
//     }

//     add(data) {
//         this.data.push(data);
//         console.log(this.data);
//     }
// }

// class TodoList extends List {
//     // como esta classe é extendida de List, não preciso colocar um constructor e nem os métodos de ADD
//     constructor() {
//         // se eu quiser adicionar um construtor personalizado em uma classe filha, devo chamar o construtor (se possível) da classe pai. O comando é super()
//         super();

//         this.usuario = 'Gabriel';
//     }

//     mostraUsuario() {
//         console.log(this.usuario);
//     }
// }

// const MinhaLista = new TodoList();

// document.getElementById('novoTodo').onclick = function() {
//     MinhaLista.add('Novo Todo');
//     MinhaLista.mostraUsuario();
// };

// Daqui pra baixo, irei trabalhar com métodos static

// class TodoList {
//     constructor() {
//         this.todos = [];
//     }

//     // método static não pode acessar atributos this. Ela atua idenpedente da classe
//     static addTodo() {
//         this.todos.push('Novo todo');
//         console.log(this.todos);
//     }
// }

// TodoList.addTodo();
