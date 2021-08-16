
const section = document.getElementsByTagName('section')[0];

let input = document.createElement('input');
input.type = 'text';
input.id = 'texto-tarefa';
section.appendChild(input);

let button = document.createElement('button');
button.id = 'criar-tarefa';
section.appendChild(button);

let listaOrdenada = document.createElement('ol');
listaOrdenada.id = "lista-tarefas";
section.appendChild(listaOrdenada);

