const inputTexto = document.querySelector('#texto-tarefa');
const botaoCriarTarefa = document.querySelector('#criar-tarefa');
const lista = document.querySelector('#lista-tarefas');
const apagaLista = document.querySelector('#apaga-tudo');
const removeFinalizados = document.querySelector('#remover-finalizados');
const botaoSalvarTarefa = document.querySelector('#salvar-tarefas');
const removeSelecionado = document.querySelector('#remover-selecionado');
const botaoCima = document.querySelector('#mover-cima');
const botaoBaixo = document.querySelector('#mover-baixo');
// Criar item lista
botaoCriarTarefa.addEventListener('click', function() {
  const criarLi = document.createElement('li');
  criarLi.classList.add('linhasLista');
  criarLi.innerText = inputTexto.value; 
  lista.appendChild(criarLi);
  criarLi.addEventListener('click', selecionaItemCor);
  criarLi.addEventListener('dblclick', riscaLista);
  criarLi.addEventListener('click', selecionaLista);
  inputTexto.value = null;
})
// Adiciona seletor cor de fundo
function selecionaItemCor(event) {
  const liLista = document.querySelectorAll('.linhasLista');
  for (let index = 0; index < liLista.length; index += 1) {
     liLista[index].style.backgroundColor = 'white';     
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}
// Risca item
function riscaLista(event) {
  const liLista = document.querySelectorAll('.linhasLista');
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
// Seleciona iten
function selecionaLista(event) {
  const liLista = document.querySelectorAll('.linhasLista');
  for (let index = 0; index < liLista.length; index += 1) {
    liLista[index].classList.remove('selected');
  }
    event.target.classList.add('selected');
}
// Remove todas li's
apagaLista.addEventListener('click', function () {
  lista.innerHTML = '';
})
// Remove Finalizados
  removeFinalizados.addEventListener('click', function() {
  const remover = document.querySelectorAll('.completed');
  for (let index = 0; index < remover.length; index += 1) {
    remover[index].parentNode.removeChild(remover[index]);
  }
})
// Salvar pagina
botaoSalvarTarefa.addEventListener('click', function () {
  const listaTarefas = document.querySelectorAll('.linhasLista');
  let listaSalva = [];
  for (let index = 0; index < listaTarefas.length; index += 1) {
    let objetoLista = {classe: listaTarefas[index].className,texto: listaTarefas[index].innerText};
    listaSalva.push(objetoLista);
  }
  localStorage.setItem('lista',JSON.stringify(listaSalva));
})
// Função Transformar Elemento
function transformarElemento (elemento) {
  let objeto = { texto: elemento.innerText, classe: elemento.className };
  
  return objeto;
}
// Mover Elemento pra cima
botaoCima.addEventListener('click', function() {
  const liSelecionado = document.querySelector('.selected');

  if (liSelecionado) {
    let alvoLi = liSelecionado.previousElementSibling;
    
    if (alvoLi) {
      let objetoSelecionado = transformarElemento(liSelecionado);
      let objetoAlvo = transformarElemento(alvoLi);

      liSelecionado.innerText = objetoAlvo.texto;
      liSelecionado.className = objetoAlvo.classe;
      liSelecionado.id = '';
      liSelecionado.style.backgroundColor = 'white'

      alvoLi.innerText = objetoSelecionado.texto;
      alvoLi.className = objetoSelecionado.classe;
      alvoLi.id = 'selected';
      alvoLi.style.backgroundColor = 'rgb(128,128,128)';
    }
  }
})
// Move Elemento pra baixo
botaoBaixo.addEventListener('click', function() {
  const liSelecionado = document.querySelector('.selected');

  if (liSelecionado) {
    let alvoLi = liSelecionado.nextElementSibling;
    
    if (alvoLi) {
      let objetoSelecionado = transformarElemento(liSelecionado);
      let objetoAlvo = transformarElemento(alvoLi);

      alvoLi.innerText = objetoSelecionado.texto;
      alvoLi.className = objetoSelecionado.classe;
      alvoLi.id = 'selected';
      alvoLi.style.backgroundColor = 'rgb(128,128,128)';

      liSelecionado.innerText = objetoAlvo.texto;
      liSelecionado.className = objetoAlvo.classe;
      liSelecionado.id = '';
      liSelecionado.style.backgroundColor = 'white'
    }
  }
})
// Remover Selecionado
removeSelecionado.addEventListener('click', function(){
  let removerSelecionado = document.querySelector('.selected');
  if (removerSelecionado == null) {
    alert('Não há item selecionado');
  } else {
    removerSelecionado.parentNode.removeChild(removerSelecionado);
  }
})
// Recupera pagina depois que fechada
window.onload = function() {  
  let recuperaLista = localStorage.getItem('lista');
  recuperaLista = JSON.parse(recuperaLista);
  let listaTarefas = document.querySelector('#lista-tarefas')
  for (let index = 0; index < recuperaLista.length; index += 1) {
    let criarLi = document.createElement('li');
    criarLi.addEventListener('click', selecionaItemCor);
    criarLi.addEventListener('dblclick', riscaLista);
    criarLi.addEventListener('click', selecionaLista);
    criarLi.innerText = recuperaLista[index].texto;
    criarLi.className = recuperaLista[index].classe;
    listaTarefas.appendChild(criarLi);
  }
}