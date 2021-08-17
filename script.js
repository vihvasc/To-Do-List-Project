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
      event.target.style.backgroundColor = 'gray';
    })
  })
}

adicionaTarefa();


// adicionar addeventlistener nas <li> 
// ao clicar vai adicionar a classe 'task'

// function destacaItem() {
//   let tarefas = document.getElementsByTagName('li');

//   for (let index = 0; index < tarefas.length, index += 1) {
//     tarefas.addEventListener('click', function (event) {
//       event.target.classList.add('task');
//     })
//   }
// }

// destacaItem();

// function destacaItem() {

//   for (let index = 0; index < tarefas.length; index += 1) {
//     let tarefas = document.getElementsByClassName('destaca');
//     console.log(tarefas);
//     tarefas.addEventListener('click', function (event) {

//       tarefas.classList.add('task');
//     })
//   }
// }

// destacaItem();

