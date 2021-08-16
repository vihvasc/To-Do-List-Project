let inputTexto = document.querySelector('#texto-tarefa');
let botaoCriarTarefa = document.querySelector('#criar-tarefa');
let lista = document.querySelector('#lista-tarefas');
let liLista = document.querySelectorAll('.linhasLista');
// let liLista = document.querySelectorAll('.linhasLista');


// Criar item lista
botaoCriarTarefa.addEventListener('click', function() {
  let criarLi = document.createElement('li');
  criarLi.classList.add('linhasLista');
  criarLi.innerText = inputTexto.value;  
  lista.appendChild(criarLi);
  inputTexto.value = null;

  // Adiciona seletor cor de fundo
  criarLi.addEventListener('click', function(){      
    let removerCor = document.querySelectorAll('.linhasLista');
    for (let index = 0; index < removerCor.length; index += 1) {
      removerCor[index].style.backgroundColor = 'white';
    }
    criarLi.style.backgroundColor = 'rgb(128,128,128)';
  })

  // Risca item
  criarLi.addEventListener('dblclick', function(){
    if (criarLi.classList.contains('completed')) {
        criarLi.classList.remove('completed');    
    } else {
      criarLi.classList.add('completed');
    }
  })
  
  
})