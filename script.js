 let bancoDeTarefas = [];
 
 function criarTarefa() {
     const input = document.getElementById('texto-tarefa');
     const tarefa = document.createElement('label');
     tarefa.classList.add('tarefa');
     tarefa.innerHTML = `<div class=descricao>${input.value}</div>`                        
     input.value = "";                        
     
     document.getElementById('lista-tarefas').appendChild(tarefa);
     document.querySelector('.tarefa').addEventListener('click', mudarCorDeFundo);
 }

 function mudarCorDeFundo() {
     const listItem = document.querySelector('.tarefa');
     listItem.style.backgroundColor = 'rgb(128, 128, 128)';
}


 
