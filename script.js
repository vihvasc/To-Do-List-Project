let getOl = document.getElementById('lista-tarefas');
let getInput = document.getElementById('texto-tarefa');
let getButtonClear = document.querySelector('#apaga-tudo');

function createTasks() {
    let setLi = document.createElement('li');
    setLi.className = 'tarefas';
    setLi.innerText = getInput.value;
    getOl.appendChild(setLi);
    getInput.value = '';
}
function clickButton() {
    let getButton = document.getElementById('criar-tarefa');
    getButton.addEventListener('click', createTasks);
}
clickButton();

function changeBackgroundColor(e){
    if(e.target.classList.contains('tarefas')){
        let elementSelected = document.querySelector('.selected');
        if (elementSelected) {
            elementSelected.classList.remove('selected');
            elementSelected.style.backgroundColor = 'white';
        }
        e.target.classList.add('selected');
        e.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
}
getOl.addEventListener('click', changeBackgroundColor);

getOl.addEventListener('dblclick', function(e) {    
    if(e.target.classList.contains('tarefas')) {
        if (e.target.classList.contains('completed')) {
            e.target.classList.remove('completed');
            e.target.style.textDecoration = 'none';
        } else {
            e.target.classList.add('completed');
            e.target.style.textDecoration = 'line-through';
        }
    }
})

function clearList() {
    let getLis = document.querySelectorAll('li');
    for (let i = 0; i < getLis.length; i += 1) {
        getLis[i].remove();
        }
    }
getButtonClear.addEventListener('click', clearList);

function clearCompleted () {
    let getClassCompleted = document.querySelectorAll('.completed');
    for (let i = 0; i < getClassCompleted.length; i += 1) {
        getClassCompleted[i].remove();
    }
}
function buttonCompleted() {
    let getButtonCompleted = document.getElementById('remover-finalizados');
    getButtonCompleted.addEventListener('click', clearCompleted);
}
buttonCompleted()

let buttonSaveTasks = document.getElementById('salvar-tarefas');
buttonSaveTasks.addEventListener('click', function() {
    let getOl = document.querySelectorAll('#lista-tarefas');
    for (let i = 0; i < getOl.length; i += 1){
    localStorage.setItem('list', JSON.stringify(getOl[i].innerHTML))
    }
});

function loadTasks () {
    let getOl = document.querySelectorAll('#lista-tarefas');
    for (let i = 0; i < getOl.length; i += 1){
        getOl[i].innerHTML = JSON.parse(localStorage.getItem('list'));
    }
}

function removeSelected () {
    let getClassSelected = document.querySelector('.selected');
        getClassSelected.remove();
}
function buttonRemoveSelected() {
    let buttonSelected = document.getElementById('remover-selecionado')
    buttonSelected.addEventListener('click', removeSelected);
}
buttonRemoveSelected()

window.onload = function() {
    loadTasks ()
};

function moveUp() {
    let getClassSelected = document.querySelector('.selected');
    let getOl1 = document.querySelector('#lista-tarefas');

    if (getClassSelected) {
        let selectedPreviousSibling = getClassSelected.previousElementSibling;
    if (selectedPreviousSibling === null) {
    } else {
         getOl1.insertBefore(getClassSelected, selectedPreviousSibling);
    }
    }
}
function buttonMoveUp() {
    let = getButtonMoveUp = document.getElementById('mover-cima');
    getButtonMoveUp.addEventListener('click', moveUp)
}
buttonMoveUp()

function moveDown() {
    let getClassSelected1 = document.querySelector('.selected');
    let getOl2 = document.querySelector('#lista-tarefas');

    if (getClassSelected1) {
        let selectedNextSibling = getClassSelected1.nextElementSibling;
    if (selectedNextSibling === null){
    } else {
        getOl2.insertBefore(selectedNextSibling ,getClassSelected1);
    }
    }
}
function buttonMoveDown() {
    let = getButtonMoveDown = document.getElementById('mover-baixo');
    getButtonMoveDown.addEventListener('click', moveDown)
}
buttonMoveDown() 