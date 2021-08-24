function addTask() {
    let inputValue = document.getElementById('texto-tarefa').value;
    let listItems = document.getElementById('lista-tarefas');
    let createListItem = document.createElement('li');
    createListItem.textContent = inputValue;
    listItems.appendChild(createListItem);
    let clearInputValue = document.getElementById('texto-tarefa');
    clearInputValue.value = "";
}
