const body = document.body;
// Requisitos Obrigatórios:
// 01 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag
// *** O que será verificado:
// ***** Será verificado se sua página possui uma tag header com o conteúdo Minha Lista de Tarefas

function adicionaTitulo() {
  const elementoHeader = document.createElement('header');
  elementoHeader.id = 'titulo-header';
  elementoHeader.textContent = 'Minha Lista de Tarefas';
  body.appendChild(elementoHeader);
}
adicionaTitulo();

// 02 - Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo".
// *** O que será verificado:
// ***** Será verificado que existe na sua página um elemento com o id funcionamento com o conteúdo Clique duas vezes em um item para marcá-lo como completo

function adicionaParagrafo() {
  const elementoP = document.createElement('p');
  elementoP.id = 'funcionamento';
  elementoP.textContent = 'Clique duas vezes em um item para marcá-lo como completo';
  body.appendChild(elementoP);
}
adicionaParagrafo();

// 03 - Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista
// *** O que será verificado:
// ***** Será verificada a existência de um elemento do tipo input com o id texto-tarefa.

function adicionaInput() {
  const elementoInput = document.createElement('input');
  elementoInput.id = 'texto-tarefa';
  body.appendChild(elementoInput);
}
adicionaInput();

// 04 - Adicione uma lista ordenada de tarefas com o id="lista-tarefas"
// *** O que será verificado:
// ***** Será verificada a existência de um elemento ol com o id lista-tarefas.

function criaLO() {
  const listaOrdenada = document.createElement('ol');
  listaOrdenada.id = 'lista-tarefas';
  body.appendChild(listaOrdenada);
}
criaLO();

// 05 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo
// *** O que será verificado:
// ***** Será verificada a existência de um elemento do tipo button com o id criar-tarefa
// ***** No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input.
// ***** A adição de elementos na lista será feita algumas vezes, e será checado se todos os itens criados permanecem na lista na medida em que novos são adicionados.

function criaTarefa() {
  // Adicionar Botão com id='criar-tarefa'
  const botaoCriarTarefa = document.createElement('button');
  botaoCriarTarefa.id = 'criar-tarefa';
  botaoCriarTarefa.textContent = 'Adicionar Tarefa';
  body.appendChild(botaoCriarTarefa);
  // Ao se clickar no botão, captura-se o texto do input e armazena em uma variável
  botaoCriarTarefa.addEventListener('click', function () {
    const textoAAdicionar = document.getElementById('texto-tarefa');
    const listaDeTarefas = document.getElementById('lista-tarefas');
    // Ao se clickar no botão, cria-se uma 'const' li com o conteúdo dessa variável (SE NÃO ESTIVER VAZIA!!!)
    if (!textoAAdicionar.value ) {
      alert('ERRO: INPUT/TEXTO NÃO PODE SER VAZIO!!!');
    } else {
      const novoItem = document.createElement('li');
      novoItem.innerHTML = textoAAdicionar.value;
      // novoItem.className = 'item-lista ';
      novoItem.addEventListener('click', function () {
        // Ao clicar no elemento, ele deve ser selecionado, e os demais devem retornar a não possuirem cor de fundo;
        // Deve-se listar todos os elementos da lista com getElementsByClassName
        // const elementosDaLista = document.getElementsByClassName('item-lista');
        const elementosDaLista = document.querySelectorAll('li');
  
        // Deve-se fazer um for alterando as propriedades de todos os elementos (Class e backgroundColor)
        for (let index = 0; index < elementosDaLista.length; index += 1) {
          // elementosDaLista[index].className = 'item-lista ';
          elementosDaLista[index].style.backgroundColor = '';
          elementosDaLista[index].id = '';
        }
        // Deve-se, ao sair do for, adicionar a propriedade selected e rgb(125,128,128) ao item Selecionado
        novoItem.style.backgroundColor = 'rgb(128,128,128)';
        novoItem.id = 'selecionado';
        // novoItem.className = 'item-lista selected';
      })
      novoItem.addEventListener('dblclick', function () {
          // Deve-se adicionar a class completed e text-decoration quando o dbclick é realizado;
          // Deve ser possível desfazer essa seleção caso o item já tenha sido selecionado;
          // Ou seja, quando o dbclick rodar, preciso verificar a class do elemento para decidir o que fazer com ele.
          
          //Deve-se verificar se o item já está selecionado como Completed
          let comparaClasse = novoItem.className;
  
          //   //Deve-se verificar se o item já está selecionado como Completed
          //     // Se não, deve-se adicionar a class completed e text-decoration quando o dbclick é realizado;
          //     elementosLista[index].className = 'completed';
          //     elementosLista[index].style.textDecoration = 'line-through solid rgb(0,0,0)';
  
          if (comparaClasse.endsWith('completed') ) {
              console.log('ELEMENTO \''+ novoItem.textContent + '\' FOI DESELECIONADO');
              novoItem.className = '';
              novoItem.style.textDecoration = '';
  
          } else {
              console.log('ELEMENTO \''+ novoItem.textContent + '\' FOI SELECIONADO');
              novoItem.className = 'completed';
              novoItem.style.textDecoration = 'line-through solid rgb(0,0,0)';
          }
          // const elementosLista = document.querySelectorAll('li');
          // console.log(novoItem.textContent);
        })
      listaDeTarefas.appendChild(novoItem);


    }
    // novoItem.addEventListener('click', function () {
    //   // Ao clicar no elemento, ele deve ser selecionado, e os demais devem retornar a não possuirem cor de fundo;
    //   // Deve-se listar todos os elementos da lista com getElementsByClassName
    //   // const elementosDaLista = document.getElementsByClassName('item-lista');
    //   const elementosDaLista = document.querySelectorAll('li');

    //   // Deve-se fazer um for alterando as propriedades de todos os elementos (Class e backgroundColor)
    //   for (let index = 0; index < elementosDaLista.length; index += 1) {
    //     // elementosDaLista[index].className = 'item-lista ';
    //     elementosDaLista[index].style.backgroundColor = '';
    //     elementosDaLista[index].id = '';
    //   }
    //   // Deve-se, ao sair do for, adicionar a propriedade selected e rgb(125,128,128) ao item Selecionado
    //   novoItem.style.backgroundColor = 'rgb(128,128,128)';
    //   novoItem.id = 'selecionado';
    //   // novoItem.className = 'item-lista selected';
    // })
    // novoItem.addEventListener('dblclick', function () {
    //     // Deve-se adicionar a class completed e text-decoration quando o dbclick é realizado;
    //     // Deve ser possível desfazer essa seleção caso o item já tenha sido selecionado;
    //     // Ou seja, quando o dbclick rodar, preciso verificar a class do elemento para decidir o que fazer com ele.
        
    //     //Deve-se verificar se o item já está selecionado como Completed
    //     let comparaClasse = novoItem.className;

    //     //   //Deve-se verificar se o item já está selecionado como Completed
    //     //     // Se não, deve-se adicionar a class completed e text-decoration quando o dbclick é realizado;
    //     //     elementosLista[index].className = 'completed';
    //     //     elementosLista[index].style.textDecoration = 'line-through solid rgb(0,0,0)';

    //     if (comparaClasse.endsWith('completed') ) {
    //         console.log('ELEMENTO \''+ novoItem.textContent + '\' FOI DESELECIONADO');
    //         novoItem.className = '';
    //         novoItem.style.textDecoration = '';

    //     } else {
    //         console.log('ELEMENTO \''+ novoItem.textContent + '\' FOI SELECIONADO');
    //         novoItem.className = 'completed';
    //         novoItem.style.textDecoration = 'line-through solid rgb(0,0,0)';
    //     }
    //     // const elementosLista = document.querySelectorAll('li');
    //     // console.log(novoItem.textContent);
    //   })

    // Faz-se o appendChild desse elemento li dentro da ol
    // listaDeTarefas.appendChild(novoItem);
    textoAAdicionar.value = '';
  })
}
criaTarefa();

// 06 - Ordene os itens da lista de tarefas por ordem de criação [OK]
// *** O que será verificado:
// **** Três itens serão criados na lista e será checado se eles estão ordenados por ordem de criação - ou seja, primeiro o primeiro item criado, depois o segundo, e assim por diante.

// 07 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128) [OK]
// *** O que será verificado:
// ***** Será verificado que, ao se carregar a página, os itens da lista não tem o estilo CSS background-color: rgb(128, 128, 128)
// ***** Será verificado que, ao se clicar em um item da lista, ele passa a ter o estilo CSS background-color: rgb(128, 128, 128)

// 08 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo [OK]
// *** O que será verificado:
// ***** Será verificado que, quando um elemento da lista é selecionado, o elemento selecionado previamente deixa de sê-lo. Isso é verificado através da presença ou não do estilo background-color: rgb(128, 128, 128) no elemento.

// 09 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item
// *** O que será verificado:
// ***** Será verificado que, antes da ação ser disparada, o elemento adicionado à lista não tem nem a classe completed nem o estilo line-through solid rgb(0, 0, 0).
// ***** Será verificado que a ação pedida é disparada mediante duplo clique no elemento da lista e que os elementos da lista completos tem em si a classe completed e a propriedade text-decoration com o valor line-through solid rgb(0, 0, 0)

// *** Pontos importantes sobre este requisito:
// ***** Crie uma classe CSS com o nome "completed" e defina a propriedade "text-decoration" com o valor "line-through".
// ***** Utilize a classe CSS "completed" para adicionar o efeito de letra tachada (riscada) às tarefas finalizadas.
// https://pt.stackoverflow.com/questions/9605/detectar-se-um-elemento-cont%C3%A9m-uma-classe-com-javascript-puro

// 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista
// *** O que será verificado:
// ***** Será verificado que existe um elemento button com o id apaga-tudo
// ***** Será verificado que, dado que uma lista possui tarefas, um clique no botão a deixa vazia

function limpaLista() {
    const botaoLimpar = document.createElement('button');
    botaoLimpar.id = 'apaga-tudo';
    botaoLimpar.textContent = 'Limpar Lista';
    botaoLimpar.addEventListener('click', function () {
      
      const elementosLista = document.querySelectorAll('li');
        for (let index = 0; index < elementosLista.length; index +=1) {
          elementosLista[index].remove();
        }
      salvaTarefas()
    })
    body.appendChild(botaoLimpar);
}
limpaLista();

// 11 - Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista
// *** O que será verificado:
// ***** Será verificado que existe um elemento button com o id remover-finalizados
// ***** Será verificado que, ao clicar no botão, todos os elementos marcados como feitos são removidos da lista

function removerFinalizados() {
  //
  const botaoRemover = document.createElement('button');
  botaoRemover.id = 'remover-finalizados';
  botaoRemover.textContent = 'Apaga Finalizados';
  body.appendChild(botaoRemover);
  botaoRemover.addEventListener('click', function () {
    const checaElementos = document.querySelectorAll('li');
    for (let index = 0; index < checaElementos.length; index += 1 ) {
      if ( checaElementos[index].className.endsWith('completed') ) {
        console.log('Apagando Elemento: ' + checaElementos[index].textContent );
        checaElementos[index].remove();
      }
    }
  })
}
removerFinalizados();

// 12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava
// *** O que será verificado:
// ***** Será verificado que existe um elemento button com o id salvar-tarefas
// ***** Será verificado que, quando a lista tiver vários elementos, alguns dos quais marcados como finalizados, um recarregamento da página mantém a lista exatamente como está.

function botaoSalvar() {
  const botaoSalvar = document.createElement('button');
  botaoSalvar.textContent = 'Salvar Tarefas';
  botaoSalvar.id = 'salvar-tarefas';
  botaoSalvar.addEventListener('click', salvaTarefas);
  body.appendChild(botaoSalvar);
}
botaoSalvar();

function salvaTarefas() {
  
  let listaOrdenada = document.querySelectorAll('li');
  let arrayDeTarefas = new Array();
  
  for (let index = 0; index < listaOrdenada.length; index += 1) {
    arrayDeTarefas.push(listaOrdenada[index].textContent);
  }
  // console.log(arrayDeTarefas); // [DEBUG]
  localStorage.setItem("arrayDeTarefas", JSON.stringify(arrayDeTarefas));
  // localStorage.setItem("arrayDeTarefas", arrayDeTarefas.toString() ); // Function de Teste
}
// salvaTarefas();

function recuperaTarefas () {
  if (localStorage.hasOwnProperty("arrayDeTarefas")) {
    const arrayDeTarefas = JSON.parse(localStorage.getItem("arrayDeTarefas"))
    // console.log(arrayDeTarefas);
    for (let index = 0; index < arrayDeTarefas.length; index +=1) {
      
      const listaTarefas = document.getElementById('lista-tarefas');
      const novaTarefa = document.createElement('li');
      novaTarefa.textContent = arrayDeTarefas[index];
      listaTarefas.appendChild(novaTarefa);
    }
    // alert("INFO: Existem dados Salvos no localStorage!!!"); // [DEBUG]
  } else {
    // alert("INFO: Não existem dados Salvos no localStorage!!!"); // [DEBUG]
  }
}
recuperaTarefas();


// 14 - Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado
// *** O que será verificado:
// ***** Será verificada a presença de um elemento button com um id remover-selecionado
// ***** Será verificado que, no clicar no botão, somente o elemento selecionado é removido

function removerSelecionado() {
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover Selecionado';
    botaoRemover.id = 'remover-selecionado';
    botaoRemover.addEventListener('click', function () {
      const elementoSelecionado = document.getElementById('selecionado');
      elementoSelecionado.remove();

    })
    body.appendChild(botaoRemover);
}
removerSelecionado();

// 13 - Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas
// * Pontos importantes sobre este requisito bônus:
// ** Antes de começar a desenvolver essa funcionalidade, pare e pense. O que significa mover um item de uma lista para cima ou para baixo no **_DOM_**? Você já possui todas as habilidades necessárias para fazer isso.
// ** Habitue-se a pensar nos casos especiais ao construir programas. O que acontece se o usuário tentar mover o primeiro item para cima ou o último para baixo?
// *** O que será verificado:
// **** Será verificada a existência de dois elementos button, um com o id mover-cima e o outro com o id mover-baixo
// **** Será verificado que, dado que diversos elementos foram acrescentados à lista, movimentá-los de formas diversas os deixa nas posições esperadas
// **** Será verificado que, caso algum elemento esteja finalizado, este status deve persistir ainda que se mova o elemento
// **** Será verificado que, caso nenhum elemento esteja selecionado, clicar nos botões não altera a lista
// **** Será verificado que um elemento que esteja selecionado deve se manter selecionado mesmo depois de movido
// **** Caso especial! Será verificado que, caso se tente subir o elemento no topo da lista ou, caso se tente descer o último elemento da lista, esta não deve ser alterada

function moverElementoSelecionado() {
  const moveCima = document.createElement('button');
  moveCima.id = 'mover-cima';
  moveCima.textContent = 'Mover para Cima';
  const moveBaixo = document.createElement('button');
  moveBaixo.id = 'mover-baixo';
  moveBaixo.textContent = 'Mover para Baixo';
  moveCima.addEventListener('click', function moveCima() {
    const arrayElementos = document.querySelectorAll('li');
    console.log(arrayElementos);
  })
  moveBaixo.addEventListener('click', function moveCima() {
    const arrayElementos = document.querySelectorAll('li');
    console.log(arrayElementos);
  })
  body.appendChild(moveCima);
  body.appendChild(moveBaixo);
}
moverElementoSelecionado();
// 1
// ***
// *****
