 // Adicionar Tarefas
 
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

 // Mudar Cor de Fundo

 function mudarCorDeFundo() {
     const listItem = document.querySelector('.tarefa');
     if (listItem.className === 'tarefa bg') {
         listItem.classList.remove('bg')
     } else if (listItem.className === 'tarefa') {
         listItem.classList.add('bg')
     }
 }

 // Riscar Tarefas Completas

 function riscarCompletos() {
    const listItem = document.querySelector('.descricao');
     if (listItem.className === 'descricao completed') {
        listItem.classList.remove('completed')
     } else if (listItem.className === 'descricao') {
        listItem.classList.add('completed')
     }
 }

 // Apagar Todas as Tarefas
  
 const btnApagarTudo = document.querySelector('#apaga-tudo');
 function apagarTudo() {
    const apagarTudo = document.querySelector('#lista-tarefas');
    apagarTudo.innerHTML = '';
  }
  btnApagarTudo.addEventListener('click', apagarTudo);

 // Apagar Tarefas Completas (Riscadas)
  
  const btnApagarCompletos = document.querySelector('#remover-finalizados');
  function apagaTarefasCompletas() {
    const completos = document.getElementsByClassName('descricao completed');
    for (let i = concluidos.length - 1; i >= 0; i -= 1) {
      completos[i].remove();
    }
  }
  btnApagarCompletos.addEventListener('click', apagaTarefasCompletas);
