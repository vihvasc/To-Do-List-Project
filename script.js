 let bancoDeTarefas = [];
 
 function criarTarefa() {
     const input = document.getElementById('texto-tarefa');
     const tarefa = document.createElement('label');
     tarefa.classList.add('tarefa');
     tarefa.innerHTML = `<div class=descricao>${input.value}</div>
                        <button class="delete"> X </button>`;
     input.value = "";                        
     
     document.getElementById('lista-tarefas').appendChild(tarefa);
 }