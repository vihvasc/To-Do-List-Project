let section = document.getElementsByTagName('section')[0];

let input = document.createElement('input');
input.type = 'text';
input.id = 'texto-tarefa';
section.appendChild(input);

let button = document.createElement('button');
button.id = 'criar-tarefa';
section.appendChild(button);

let listaOrdenada = document.createElement('ol');
listaOrdenada.id = 'lista-tarefas';
section.appendChild(listaOrdenada);

//-------------------------------------------
 
function addTarefas() {
  let input = document.getElementById('texto-tarefa');
  let textoInput = input.value;
  let textoLi = document.createElement('li');
  textoLi.innerHTML = textoInput;
  listaOrdenada.appendChild(textoLi);
  input.value = '';
}

let botaoInserir = document.getElementById('criar-tarefa')
botaoInserir.addEventListener('click', addTarefas)


// let inputTarefa = document.getElementById('texto-tarefa');
// inputTarefa.addEventListener('input', addListaTarefas);

// function addListaTarefas(event){
//     inputTarefa.value = '';
// }

