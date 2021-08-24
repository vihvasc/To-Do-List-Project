 let bancoDeTarefas = [];
 
 function criarTarefa() {
     const input = document.getElementById('texto-tarefa');
     const tarefa = document.createElement('label');
     tarefa.classList.add('tarefa');
     tarefa.innerHTML = `<div class=descricao>${input.value}</div>`                        
     input.value = "";                        
     
     document.getElementById('lista-tarefas').appendChild(tarefa);
 }

 function mudarCorDeFundo() {
     const label = document.querySelector('.tarefa');
     label.style.backgroundColor = rgb(128, 128, 128);
}

document.querySelector('.tarefa').addEventListener('click', mudarCorDeFundo);
 
