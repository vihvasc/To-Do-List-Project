let input = document.querySelector('#texto-tarefa');
let button = document.querySelector('#criar-tarefa');
let list = document.querySelector('#lista-tarefas');

function createTask() {
    if (input.value !== '') {
        let task = document.createElement('li');
        task.innerHTML = input.value;
        task.addEventListener('dblclick', finishItem)
        list.appendChild(task);
        input.value = '';
    }
}

function selectItem(event) {
    let listItens = document.querySelectorAll('li');
    for (let index = 0; index < listItens.length; index += 1) {
        listItens[index].style.backgroundColor = 'white';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function finishItem(event) {
    let task = event.target;
    if (task.className === 'completed') {
    task.className = '';
  } else {
    task.className = 'completed';
  }
}

window.onload = function init() {
    button.addEventListener('click', createTask);
    list.addEventListener('click', selectItem);
}
