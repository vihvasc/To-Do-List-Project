const buttonAddTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
taskList.innerHTML = localStorage.getItem('saved-list');
const allTasks = document.getElementsByClassName('task');
const removeDoneButton = document.getElementById('remover-finalizados');
const saveTasks = document.getElementById('salvar-tarefas');
const moveUpButton = document.getElementById('mover-cima');
const removeAllButton = document.getElementById('apaga-tudo');
const moveDownButton = document.getElementById('mover-baixo')
const removeSelected = document.getElementById('remover-selecionado')

function createStaticButtons(){
    buttonAddTask.addEventListener('click',addTask);
    removeDoneButton.addEventListener('click', removeTasksDone);
    removeAllButton.addEventListener('click', removeAllTasks);
    saveTasks.addEventListener('click', save);
    moveUpButton.addEventListener('click', moveUp)
    moveDownButton.addEventListener('click', moveDown)
    removeSelected.addEventListener('click', removeItem)
}
createStaticButtons();
function addTask(){
    let textInput = document.getElementById('texto-tarefa').value 
    let newTask = document.createElement('li')
    newTask.innerText = textInput
    newTask.addEventListener('click',changeColor)
    newTask.addEventListener('dblclick',taskDone)
    newTask.className = 'task'
    taskList.appendChild(newTask)
    document.getElementById('texto-tarefa').value = ''
}

function changeColor(event){
    let index = allTasks.length
    for(let count = 0;count < index; count += 1){
        if(allTasks[count].classList.contains('selected')){
            allTasks[count].classList.toggle('selected')
        }
    }
    event.target.classList.toggle('selected')
}
function taskDone(event){
    let currentTask = event.target
    if(currentTask.classList.contains('completed')){
        currentTask.classList.remove('completed')
    }else{
        currentTask.classList.add('completed')
    }
}
function removeTasksDone(){
    for(let index = allTasks.length-1 ; index >= 0; index -= 1){
        if(allTasks[index].classList.contains('completed')){
            allTasks[index].remove();
        }
    }
}
function removeAllTasks(){
    for(let index = allTasks.length-1 ; index >= 0; index -= 1){
        allTasks[index].remove();
    }
}

function save(){
    localStorage.setItem('saved-list', taskList.innerHTML)
}
function moveUp(){
    let index = allTasks.length
    for(let count = 0;count < index; count += 1){
        if(allTasks[count].classList.contains('selected')){
           var taskSelected = allTasks[count];
           var taskSelectedId = count
        }
    }
    if(taskSelectedId > 0){
    var a = allTasks[taskSelectedId].parentNode;
    a.insertBefore(allTasks[taskSelectedId], allTasks[taskSelectedId - 1])
    }
}
function moveDown(){
    let index = allTasks.length
    for(let count = 0;count < index; count += 1){
        if(allTasks[count].classList.contains('selected')){
           var taskSelected = allTasks[count];
           var taskSelectedId = count
        }
        
    }
    if(taskSelectedId < allTasks.length-1){
    var b = allTasks[taskSelectedId].parentNode;
    c = allTasks[taskSelectedId]
    b.insertBefore(allTasks[taskSelectedId], c.nextSibling.nextSibling)
    }

}
function removeItem(){
    let index = allTasks.length
    for(let count = 0;count < index; count += 1){
        if(allTasks[count].classList.contains('selected')){
            allTasks[count].remove();
        }
    }
}