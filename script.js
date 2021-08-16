window.onload = function() {

 
}
const butao = document.getElementById('criar-tarefa');

function getText() {
  const listaTarefas = document.getElementById('lista-tarefas');
  const input = document.getElementById('texto-tarefa');
  const li = document.createElement('li');
  
  li.innerText = input.value;
  listaTarefas.appendChild(li);
  input.value = '';
}

butao.addEventListener('click', getText);
// function changeTech(event) {
//     const element = document.querySelector('.tech');
//     element.classList.remove('tech');
//     let bgc = event.target.style.backgroundColor;
//     input.value = bgc;
//     event.target.classList.add('tech');
//     event.target.style.backgroundColor = 'yellow';
//     //input.value = '';
//   }
  
//   firstLi.addEventListener('click', changeTech);
//   secondLi.addEventListener('click', changeTech);
//   thirdLi.addEventListener('click', changeTech);
  