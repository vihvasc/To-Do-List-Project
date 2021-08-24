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

 document.querySelector('.tarefa').addEventListener('click', mudarCorDeFundo);
 document.querySelector('.descricao').addEventListener('dblclick', riscarCompletos);

 function mudarCorDeFundo(e) {
  const listItem = document.querySelector('.tarefa');
  if (listItem.className === 'tarefa bg' || listItem.className === 'descricao bg') {
       e.target.classList.remove('bg')
   } else if (listItem.className === 'tarefa') {
       e.target.classList.add('bg')
       console.log(e.target);
   }   
 }
 
 // Riscar Tarefas Completas

 function riscarCompletos(e) {
    const listItem = document.querySelector('.descricao');
    if (listItem.className === 'descricao completed') {
        e.target.classList.remove('completed')
     } else if (listItem.className === 'descricao') {
        e.target.classList.add('completed')
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
    for (let i = completos.length-1; i >= 0; i -= 1) {
      completos[i].remove();
    }
  }
  btnApagarCompletos.addEventListener('click', apagaTarefasCompletas);

  
  