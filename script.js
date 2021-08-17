let buttonList = document.getElementById('criar-tarefa')
let listItem = document.getElementsByTagName('li')
let buttonEraseAll = document.getElementById('apaga-tudo')
let buttonEraseFinished = document.getElementById('remover-finalizados')


buttonList.addEventListener('click', function(){
    const input = document.getElementById('texto-tarefa');
    const task = input.value;
    const itemList = document.getElementById('lista-tarefas')
    const item = document.createElement('li')
    itemList.appendChild(item)
    item.innerHTML = task
    input.value = ''
    item.addEventListener('click', clickLiToChangeColor)
    item.addEventListener('dblclick', completedTask)
})


function clickLiToChangeColor(li) {
    for (let index = 0; index < listItem.length; index += 1) {
        if (listItem[index].style.backgroundColor === 'rgb(128, 128, 128)') {
            listItem[index].style.backgroundColor = 'white'
        }
    }
    li.target.style.backgroundColor = 'rgb(128, 128, 128)'
}

function completedTask(event) {
    event.target.classList.toggle('completed')
}


buttonEraseAll.addEventListener('click', function() {
    const list = document.querySelectorAll('li')
    for (index = 0; index < list.length; index += 1) {
        list[index].remove()
    }
})

buttonEraseFinished.addEventListener('click', function() {
    const list = document.querySelectorAll('li.completed')
    for (index = 0; index < list.length; index += 1) {
        list[index].remove()
    }
})

let saved = localStorage.setItem('ol', 'li')

console.log(saved)
