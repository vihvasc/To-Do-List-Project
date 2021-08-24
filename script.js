function addTask() {
    let inputValue = document.getElementById('texto-tarefa').value;
    let listItems = document.getElementById('lista-tarefas');
    let createListItem = document.createElement('li');
    createListItem.textContent = inputValue;
    listItems.appendChild(createListItem);
    let clearInputValue = document.getElementById('texto-tarefa');
    clearInputValue.value = "";
    createListItem.addEventListener('click', changeBackground);
}

function changeBackground(event) {
    if (document.getElementsByClassName('selected').length !== 0) {
        document.getElementsByClassName('selected')[0].classList.remove('selected');
    }
    event.target.classList.add('selected');
}







