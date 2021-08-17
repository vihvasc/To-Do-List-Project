function criarTarefa(){
    let input = document.getElementById('texto-tarefa');
    let texto = input.value;
    let itemLista = document.getElementById('lista-tarefas');
    let novoItem = document.createElement('li');     
    
    novoItem.innerHTML = texto;
    itemLista.appendChild(novoItem);
    input.value = "";

    novoItem.addEventListener('click', alteraCor);   
    novoItem.addEventListener('dblclick', marcaItem);
}

// requisito 8
function alteraCor(evento){
    let listaTotal = document.getElementsByTagName('li');
    
    for (let i of listaTotal){             
        i.style.backgroundColor = 'white';            
    }
    evento.target.style.backgroundColor = 'rgb(128,128,128)';
    
}
   
 // requisito 9 
  function marcaItem(evento){
    let listaTotal = document.getElementsByTagName('li');       
        
        if(evento.target.classList.contains('completed')) {
            evento.target.classList.remove('completed')
        } else{
            evento.target.classList.add('completed')
        }   
       
     }    
    

// requisito 10
function apagaTudo(){
    listaCompleta = document.getElementById('lista-tarefas');
    listaCompleta.innerHTML = "";
}
let button = document.getElementById('apaga-tudo');
button.addEventListener('click', apagaTudo);   

    
    

    