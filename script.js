 // Adicionar Tarefas
 
 function criarTarefa() {
     const input = document.getElementById('texto-tarefa');
     const tarefa = document.createElement('label');
     tarefa.classList.add('tarefa');
     tarefa.innerHTML = `<div class="texto">${input.value}</div>`
     input.value = "";
          
     document.getElementById('lista-tarefas').appendChild(tarefa);
     document.querySelector('.tarefa').addEventListener('click', mudarCorDeFundo);
     document.querySelector('.tarefa').addEventListener('dblclick', riscarCompletos);
 }

 // Mudar Cor de Fundo

 document.querySelector('#lista-tarefas').addEventListener('click', mudarCorDeFundo);
 document.querySelector('#lista-tarefas').addEventListener('dblclick', riscarCompletos);

 function mudarCorDeFundo(e) {
  const listItem = document.querySelector('.tarefa');
  e.target = listItem.classList.add('bg');
  console.log('um click', e.target)

  listItem.removeEventListener('click', mudarCorDeFundo);
}
  
 // Riscar Tarefas Completas

 function riscarCompletos(e) {
    const textItem = document.querySelector('.texto');
    e.target = textItem.classList.add('completed');
    console.log('dois clicks', e.target)

    textItem.removeEventListener('dblclick', riscarCompletos);
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

  
  