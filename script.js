function adicionaTarefa() {
  let botao = document.getElementById('criar-tarefa');

  botao.addEventListener('click', function (event) {
    let input = document.getElementById('texto-tarefa').value;
    let ol = document.getElementById('lista-tarefas');
    let li = document.createElement('li');
    ol.appendChild(li);
    li.innerText = input;
    console.log(li);
    document.getElementById('texto-tarefa').value = '';
    li.addEventListener('click', function (event) {
      let li = document.getElementsByTagName('li');
      for (let index of li) {
        index.style.backgroundColor = 'white';
      }
      event.target.style.backgroundColor = 'rgb(128,128,128)';
    })
  })
}

adicionaTarefa();

function lineThrough() {
  let lista = document.getElementsByTagName('ol');
  for (let index = 0; index < lista.length; index += 1) {
    lista[index].addEventListener('dblclick', function (event) {
      event.target.classList.toggle('completed');
    })
  }
}

lineThrough();

function cleanList() {
  let botaoLimpar = document.getElementById('apaga-tudo');
  botaoLimpar.addEventListener('click', function () {
    let li = document.querySelectorAll('li');
    for (let index of li)
      index.remove();
  })
}

cleanList();

function limparCompletos() {
  let btLimpaMarcados = document.getElementById('remover-finalizados');
  btLimpaMarcados.addEventListener('click', function () {
    let li = document.querySelectorAll('.completed');
    for (let index of li)
      index.remove();
  })
}

limparCompletos();


