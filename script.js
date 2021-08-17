let section = document.getElementsByTagName('section')[0];
let secTion = document.getElementsByTagName('section')[1];

let input = document.createElement('input');
input.type = 'text';
input.id = 'texto-tarefa';
section.appendChild(input);

let button = document.createElement('button');
button.id = 'criar-tarefa';
button.innerText = 'Adicionar';
button.style.backgroundColor = 'blue';
section.appendChild(button);

let listaOrdenada = document.createElement('ol');
listaOrdenada.id = 'lista-tarefas';
section.appendChild(listaOrdenada);

let buttonClear = document.createElement('button');
buttonClear.id = 'apaga-tudo';
buttonClear.innerText = 'Limpar Lista';
secTion.appendChild(buttonClear);


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
let buttonAdicionar = document.getElementById('criar-tarefa');
buttonAdicionar.addEventListener('click', addTarefas);

//Colorir Cinza
let textoLi = document.getElementById('lista-tarefas');
textoLi.addEventListener('click', function (event) {
  event.target.style.backgroundColor = 'rgb(128,128,128)';
});

//Risca e Retira risco
textoLi.addEventListener('dblclick',function(event){
event.target.classList.toggle('completed');
})

//Botrão apaga tudo

buttonClear.addEventListener('click', function(event){

})