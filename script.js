const title = document.createElement('header')
title.innerHTML = 'Minha Lista de Tarefas'
document.body.appendChild(title)

const p = document.createElement('p')
p.id = 'funcionamento'
p.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo'
document.body.appendChild(p)

const list = document.createElement('ol')
list.id = 'lista-tarefas'
document.body.appendChild(list)

const input = document.createElement('input')
input.type = 'text'
input.id = 'texto-tarefa'
document.body.appendChild(input)

input.addEventListener('change', function(){

    let item = document.createElement('li')
    item.innerText = input.value
    list.appendChild(item)
    input.value = ''

})
