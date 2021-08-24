 let bancoDeTarefas = [];
 
 function criarTarefa() {
     const input = document.getElementById('texto-tarefa');
     const tarefa = document.createElement('label');
     tarefa.classList.add('tarefa');
     tarefa.innerHTML = `<div class=descricao>${input.value}</div>`                        
     input.value = "";                        
     
     document.getElementById('lista-tarefas').appendChild(tarefa);
     document.querySelector('.tarefa').addEventListener('click', mudarCorDeFundo);
     document.querySelector('.tarefa').addEventListener('dblclick', riscarCompletos);
 }

 function mudarCorDeFundo() {
     const listItem = document.querySelector('.tarefa');
     listItem.classList.add('bg');
 }

 function riscarCompletos() {
    const listItem = document.querySelector('.tarefa');
    listItem.classList.add('completed');
 }

 
