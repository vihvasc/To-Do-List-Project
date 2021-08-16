// addeventlistener no botão com id "criar-tarefa";
// criar <il> filhos da <ol> com id "lista-tarefas";
// criar uma variável com o valor "innertext" do input com id "texto-tarefa"

function adicionaTarefa() {
  let botao = document.getElementById('criar-tarefa');

  botao.addEventListener('click', function (event) {
    let input = document.getElementById('texto-tarefa').value;
    let ol = document.getElementById('lista-tarefas');
    let li = document.createElement('li');
    ol.appendChild(li);
    li.innerText = input;
    document.getElementById('texto-tarefa').value = '';
  })
}

adicionaTarefa();