let buttonList = document.getElementById('criar-tarefa')
let listItem = document.getElementsByTagName('li')



buttonList.addEventListener('click', function(){
    const input = document.getElementById('texto-tarefa');
    const task = input.value;
    const itemList = document.getElementById('lista-tarefas')
    const item = document.createElement('li')
    itemList.appendChild(item)
    item.innerHTML = task
    input.value = ''
    item.addEventListener('click', clickLiToChangeColor)
})


function clickLiToChangeColor(li) {
    for (let index = 0; index < listItem.length; index += 1) {
        if (listItem[index].style.backgroundColor === 'rgb(128, 128, 128)') {
            listItem[index].style.backgroundColor = 'white'
        }
    }
    li.target.style.backgroundColor = 'rgb(128, 128, 128)'
}

