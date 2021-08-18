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

const btnInserir = document.createElement('button')
btnInserir.innerText = 'Inserir'
btnInserir.className = 'btn'
btnInserir.id = 'criar-tarefa'
document.body.appendChild(btnInserir)


btnInserir.addEventListener('click', function(){

    let item = document.createElement('li')
    item.innerText = input.value
    item.addEventListener
    list.appendChild(item)
    input.value = ''

})
