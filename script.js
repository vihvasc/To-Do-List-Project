const button = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

function createTask() {
    const task = document.createElement('li');
    const input = document.getElementById('texto-tarefa');

    task.innerText = input.value;
    task.className = 'taskList';
    taskList.appendChild(task);
    input.value = '';
}

button.addEventListener('click', createTask);

function changeColor (event) {
    let task = document.getElementsByClassName('taskList');
    console.log(task)
    for (let index = 0; index < task.length; index += 1) {
        task[index].classList.remove('selected');
    }
    let selected = event.target;
    if (selected.className !== 'selected') {
        selected.classList.add('selected');
    }
}

taskList.addEventListener('click', changeColor)
