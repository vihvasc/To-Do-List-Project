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
    for (let index = 0; index < task.length; index += 1) {
        task[index].classList.remove('selected');
    }
    let selected = event.target;
    if (selected.className !== 'selected') {
        selected.classList.add('selected');
    }
}

taskList.addEventListener('click', changeColor)

function completedTask (event) {
    let completed = event.target;
    completed.classList.toggle('completed');
}

taskList.addEventListener('dblclick', completedTask);

function clearTasks() {
    taskList.innerText = '';
}

const clearButton = document.getElementById('apaga-tudo');
clearButton.addEventListener('click', clearTasks);

function finalizedRemove() {
    let finalized = document.getElementsByClassName('completed');
    do {
        let i = finalized.length - 1;
        finalized[i].remove();
    } while (finalized.length - 1 >= 0);
}

const finalizedButton = document.getElementById('remover-finalizados');
finalizedButton.addEventListener('click', finalizedRemove);
