let input = document.querySelector('#texto-tarefa');
let button = document.querySelector('#criar-tarefa');
let list = document.querySelector('#lista-tarefas');

function createListItem() {
    if (input.value !== '') {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);
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

//function clearItem(event) {
    //let 
//}

window.onload = function init() {
    button.addEventListener('click', createListItem);
    list.addEventListener('click', selectItem);
}
