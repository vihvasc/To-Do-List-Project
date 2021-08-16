let botao = document.getElementById('criar-tarefa');
let entrada = document.getElementById('texto-tarefa');
botao.addEventListener('click', addTarefa);


function addTarefa (){
    let lista = document.getElementById('lista-tarefas');
    let elemento = document.createElement('li');
    elemento.innerText = entrada.value;
    entrada.value = '';
    lista.appendChild(elemento);
}
