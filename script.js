 let bancoDeTarefas = [];
 
 function criarTarefa() {
     const input = document.getElementById('texto-tarefa');
     const tarefa = document.createElement('label');
     tarefa.classList.add('tarefa');
     tarefa.innerHTML = `<div class=descricao>${input.value}</div>`                        
     input.value = "";                        
     
     document.getElementById('lista-tarefas').appendChild(tarefa);
 }

 function mudarCorDeFundo(color) {
     const label = document.querySelector('.tarefa');
     label.style.background = color;
 }
 
 document.querySelector('.tarefa').addEventListener('onClick', mudarCorDeFundo('rgb(128,128,128)'));