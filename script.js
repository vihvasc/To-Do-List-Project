
const section = document.getElementsByTagName('section')[0];

let listaOrdenada = document.createElement('ol');
listaOrdenada.id = "lista-tarefas";
section.appendChild(listaOrdenada);

let button = document.createElement('button');
button.id = 'criar-tarefa';
section.appendChild(button);
