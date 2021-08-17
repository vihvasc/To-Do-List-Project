let input = document.getElementById('texto-tarefa');
let buttonTask = document.getElementById('criar-tarefa');
let listTask = document.getElementById('lista-tarefas');

buttonTask.addEventListener('click', createListTask);
// target: botao
// evento: clicar no botao, adiciona a task do input na lista
function createListTask(event) {
    let liTaks = document.createElement('li');
    liTaks.innerText = input.value;
    liTaks.className = 'liTag';
    listTask.appendChild(liTaks);
    event.target.buttonTask;
    input.value = "";
}

// target: li tag
// evento: ao clicar na lista, altera backgroundColor
function liBackgroundColor(event) {
    let liTag = listTask.children;
    for (let i = 0; i < liTag.length; i++) {
        liTag[i].className = 'liTag';
    }

    event.target.className = 'liTag selected';
}
listTask.addEventListener('click', liBackgroundColor);

function liRisk(event) {
    let liTag = listTask.children;
    for (let i = 0; i < liTag.length; i++) {
        liTag[i].className = 'liTag';
    }

    event.target.className = 'liTag completed';
}
listTask.addEventListener('dblclick', liRisk);

function liNoRisk(event) {
    let liTag = listTask.children;
    for (let i = 0; i < liTag.length; i++) {
        if (liTag[i].className = 'liTag completed'){
            event.target.className = 'liTag';
        }
    }

    
}
