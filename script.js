let recebe_info = document.getElementById('texto-tarefa');


document.getElementById('criar-tarefa').addEventListener('click', function() {
    var li = document.createElement('li')
    let li_lista = document.getElementsByTagName('li');
    
    li.addEventListener('click', function(){
        for(let i=0; i < li_lista.length; i+=1){
            li_lista[i].style.backgroundColor = 'white'
        li.style.backgroundColor = 'rgb(128,128,128)'
        }
    })

    //coloca 'li' como filho do 'ol':
    let lista_ordenada = document.getElementById('lista-tarefas');
    lista_ordenada.appendChild(li)
    li.innerText = recebe_info.value
    //limpa a caixa de texto:
    recebe_info.value=''

})
