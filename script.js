const criarTarefa = document.getElementById('criar-tarefa');
const imput = document.getElementById('texto-tarefa');
const chamaLista = document.getElementById('lista-tarefas');
const buttonClearAll = document.getElementById('apaga-tudo');
const removeFinalizados = document.getElementById('remover-finalizados');

criarTarefa.addEventListener('click', addListaTarefa);
chamaLista.addEventListener('click' , corDaLinha);
chamaLista.addEventListener('dblclick' , taskCompleted);
buttonClearAll.addEventListener("click", clearAll);
//removeFinalizados.addEventListener("click", removeElementoFinalizado);

function addListaTarefa() {
  const criaLista = document.createElement('li');
  criaLista.innerText = imput.value;
  chamaLista.appendChild(criaLista);
  imput.value = '';
}
function corDaLinha(event) {
    const selected = document.querySelector(".selected");
    if (!selected) {
        event.target.classList.add("selected");
    }else {
        selected.classList.remove("selected");
        event.target.classList.add("selected");
    }


} 
function taskCompleted(event) {
       if (event.target.classList.contains("completed")) {
         event.target.classList.remove("completed");
       }else{
           (event.target.classList.add("completed"));
        }
}

//buttonClearAll.addEventListener("click", clearAll);
function clearAll() {
    chamaLista.innerHTML = "";
}