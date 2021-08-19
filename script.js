let btn = document.querySelector('#criar-tarefa');
let btnApaga = document.querySelector('#apaga-tudo');
let btnApagaCompletos = document.querySelector('#remover-finalizados');

function criaTarefa() {
  if(document.querySelector('#texto-tarefa').value == '') alert('digite uma tarefa');
  else {  
  let lista = document.querySelector('#lista-tarefas');  
  let criaLista = document.createElement('li');
  let texto = document.querySelector('#texto-tarefa').value;
  criaLista.className = 'lista';
  criaLista.innerText = texto;
  lista.appendChild(criaLista);
  document.querySelector('#texto-tarefa').value = '';
  }
  selecionar();
}

function selecionar () {
  let listaSelecionado = document.querySelectorAll('.lista');
  for(let index = 0; index < listaSelecionado.length; index += 1){
    listaSelecionado[index].addEventListener('click', selecionado);
    listaSelecionado[index].addEventListener('dblclick', tarefaFinalizada);
  }
}

function selecionado(origem) {
  removeId = document.querySelector('#selecionado');
  if(removeId !== null) removeId.removeAttribute('id');
  origem.target.id = 'selecionado';
}

function tarefaFinalizada(origem) {
  if(origem.target.className == 'completed') origem.target.classList.remove('completed');  
  else origem.target.classList.add('completed');
}

function apagaLista() {
  let lista = document.querySelectorAll('.lista');
  for(let index = lista.length - 1; index >= 0; index -= 1){
    lista[index].remove();
  }
}

function apagaCompletos() {
  let listaCompletos = document.querySelectorAll('.completed');
  for(let index = listaCompletos.length - 1; index >= 0; index -= 1){
    listaCompletos[index].remove();
  }
}

btn.addEventListener('click', criaTarefa);
btnApaga.addEventListener('click', apagaLista);
btnApagaCompletos.addEventListener('click', apagaCompletos)