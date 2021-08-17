let inputTexto = document.querySelector('#texto-tarefa');
let botaoCriarTarefa = document.querySelector('#criar-tarefa');
let lista = document.querySelector('#lista-tarefas');
let liLista = document.querySelectorAll('.linhasLista');
let navegador = document.querySelector('.navegador');
let apagaLista = document.querySelector('#apaga-tudo');
let removeFinalizados = document.querySelector('#remover-finalizados');
let salvarTarefa = document.querySelector('#salvar-tarefas');
let removeSelecionado = document.querySelector('#remover-selecionado');
let botaoCima = document.querySelector('#mover-cima')

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
  criarLi.addEventListener('dblclick', function() {
    if (criarLi.classList.contains('completed')) {
        criarLi.classList.remove('completed');
    } else {
      criarLi.classList.add('completed');
    }
  })

  // Seleciona iten
  criarLi.addEventListener('click', function() {
    let lista = document.querySelectorAll('.linhasLista');
    for (let index = 0; index < lista.length; index += 1) {
      lista[index].classList.remove('selected');
    }
      criarLi.classList.add('selected');
  })  
})

// Remove todas li's
apagaLista.addEventListener('click', function() {
  lista.innerHTML = '';
})

// Remove Finalizados
  removeFinalizados.addEventListener('click', function() {
  let remover = document.querySelectorAll('.completed');
  for (let index = 0; index < remover.length; index += 1) {
    remover[index].parentNode.removeChild(remover[index]);
  }  
})

// // Salvar pagina
// salvarTarefa.addEventListener('click', function () {
//   let salvaLista = document.querySelectorAll('#lista-tarefas');
//   localStorage.setItem('lista2', salvaLista);
// })

// // Mover Cima
// botaoCima.addEventListener('click', function() {
//   moverCima = document.querySelector('.selected');

// })

// Remover Selecionado
removeSelecionado.addEventListener('click', function(){
  let removerSelecionado = document.querySelector('.selected');  
  if (removerSelecionado == null) {
    window.alert('Não há item selecionado');
  } else {
    removerSelecionado.parentNode.removeChild(removerSelecionado);
  }
})