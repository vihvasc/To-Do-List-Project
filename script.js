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
  const listItems = document.querySelectorAll('.tarefa');
  for (let i = 0; i < listItems.length; i+=1) {
    if (listItems[i].classList.contains('bg')) {
      listItems[i].classList.remove('bg')
    } 
  } e.target.classList.add('bg');
}
  
 // Riscar Tarefas Completas

 function riscarCompletos(e) {
    const textItem = document.querySelector('.texto');
    e.target = textItem.classList.add('completed');
    
   
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

  
  