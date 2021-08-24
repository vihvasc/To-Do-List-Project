function addTask() {
    let inputValue = document.getElementById('texto-tarefa').value;
    let listItems = document.getElementById('lista-tarefas');
    let createListItem = document.createElement('li');
    createListItem.textContent = inputValue;
    listItems.appendChild(createListItem);
    let clearInputValue = document.getElementById('texto-tarefa');
    clearInputValue.value = "";
    createListItem.addEventListener('click', changeBackground);
    createListItem.addEventListener('dblclick', taskComplete);
}

function changeBackground(event) {
    if (document.getElementsByClassName('selected').length !== 0) {
        document.getElementsByClassName('selected')[0].classList.remove('selected');
    } 
    event.target.classList.add('selected');
}

function taskComplete(event) {
    if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
    } else {
    event.target.classList.add('completed');
    }
}

let clearButton = document.getElementById('apaga-tudo');
clearButton.addEventListener('click', clearList);

function clearList() {
    let listedTasks = document.querySelectorAll('li');
    for (let i = 0; i < listedTasks.length; i += 1) {
        listedTasks[i].remove();
    }
}

let clearCompleteButton = document.getElementById('remover-finalizados');
clearCompleteButton.addEventListener('click', clearComplete);

function clearComplete() {
    let completedList = document.querySelectorAll('.completed');
    for (let i = 0; i < completedList.length; i += 1) {
        completedList[i].remove();
    }
}


