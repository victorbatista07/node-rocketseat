// inicio aula 02
// procurando dentro de uma tag com o id "#app" a tag ul
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// faz parte da aula 06
// pegandos os valores da chave 'list_todos' na memória local
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
// fim da parte da aula 06

// faz parte da aula 02
// var todos = [
//     'Fazer café',
//     'Estudar JavaScript',
//     'Acessar o Google'
// ];
// fim aula 02

// inicio aula 03
function renderTodos() {
    // faz parte da aula 04
    listElement.innerHTML = ''; // limpando elemento da lista
    // fim da aprte da aula 04

    // um foreach
    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        // inicio aula 05
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');
        var pos = todos.indexOf(todo);

        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');
        linkElement.appendChild(linkText);
        // fim aula 05

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

// fim aula 03

// inicio aula 04
function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = ''; // apagando value do input
    
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;
// fim aula 04

// faz parte da aula 05
function deleteTodo(pos) {
    // 
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}
// fim da parte da aula 05

// inicio aula 06
function saveToStorage() {
    /*
    Irei usar o armazenamento local para salvar a lista do usuário
    primeiro, defino a referencia dos valores
    segundo, passo o valor
    o localStorage não tem a capacidade de manipular arrays ou objetos
    ele é simplesmente uma chave-valor e por isso devo usar JSON
    */
    localStorage.setItem('list_todos', JSON.stringify(todos));
}
// fim da aula 06