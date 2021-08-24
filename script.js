function addTask() {
    let inputValue = document.getElementById('texto-tarefa').value;
    let listItems = document.getElementById('lista-tarefas');
    let createListItem = document.createElement('li');
    createListItem.textContent = inputValue;
    createListItem.className = 'taskListed';
    listItems.appendChild(createListItem);
    let clearInputValue = document.getElementById('texto-tarefa');
    clearInputValue.value = "";
    createListItem.addEventListener('click', changeBackground);
}

function changeBackground(event) {
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}







