let section = document.getElementsByTagName('section')[0];

let input = document.createElement('input');
input.type = 'text';
input.id = 'texto-tarefa';
section.appendChild(input);

let button = document.createElement('button');
button.id = 'criar-tarefa';
button.style.backgroundColor = 'blue'
section.appendChild(button);

let listaOrdenada = document.createElement('ol');
listaOrdenada.id = 'lista-tarefas';
section.appendChild(listaOrdenada);

//-------------------------------------------
 
function addTarefas() {
  let input = document.getElementById('texto-tarefa');
  // let textoInput = input.value;
  let textoLi = document.createElement('li');
  textoLi.innerHTML = input.value; //textoInput;
  listaOrdenada.appendChild(textoLi);
  input.value = '';
}

//Botão adicionar
let buttonAdicionar = document.getElementById('criar-tarefa')
buttonAdicionar.addEventListener('click', addTarefas)

//Colorir Cinza
let textoLi = document.getElementById('lista-tarefas');
textoLi.addEventListener('click',function(event){
    event.target.style.backgroundColor = 'rgb(128,128,128)';
});

//Riscar Tarefa
textoLi.addEventListener('dblclick', function(event){
event.target.classList.add('completed');
})