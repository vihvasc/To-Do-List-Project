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





