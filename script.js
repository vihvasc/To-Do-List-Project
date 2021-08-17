function finalizedClean() {
  const buttonFinalized = document.getElementById('remover-finalizados');
  const taksfinalized = document.querySelectorAll('.completed');
  localStorage.clear();
  buttonFinalized.addEventListener('click', () => {
    for (let key = 0; key < taksfinalized.length; key += 1) {
      taksfinalized[key].remove();
    }
  });
}

function clean() {
  const buttonClean = document.getElementById('apaga-tudo');
  const li = document.querySelectorAll('li');
  buttonClean.addEventListener('click', () => {
    localStorage.clear();
    for (let key = 0; key < li.length; key += 1) {
      li[key].remove();
    }
  });
}
clean();

function removeSelect() {
  const buttonRemove = document.getElementById('remover-selecionado');
  const valueSelect = document.querySelector('.select');
  buttonRemove.addEventListener('click', () => {
    valueSelect.remove();
  });
}

function taskComplete() {
  const li = document.querySelectorAll('li');
  for (let key = 0; key < li.length; key += 1) {
    let cont = 0;
    li[key].addEventListener('dblclick', () => {
      if (cont === 0) {
        li[key].className = 'completed';
        finalizedClean();
        cont = 1;
      } else {
        li[key].classList.remove('completed');
        cont = 0;
      }
    });
  }
}
taskComplete();

function cleanBackgrood() {
  const li = document.querySelectorAll('li');
  for (let key = 0; key < li.length; key += 1) {
    li[key].style.backgroundColor = '#1a1a1d ';
    li[key].className = '';
  }
}

function listColor() {
  const li = document.querySelectorAll('li');
  for (let key = 0; key < li.length; key += 1) {
    li[key].addEventListener('click', () => {
      cleanBackgrood();
      li[key].style.backgroundColor = 'rgb(128, 128, 128)';
      li[key].className = 'select';
      removeSelect();
    });
  }
}
listColor();

function salve() {
  const buttonSalve = document.getElementById('salvar-tarefas');
  const salveLi = document.querySelectorAll('li');
  const objeto = [];
  buttonSalve.addEventListener('click', () => {
    for (let key = 0; key < salveLi.length; key += 1) {
      const value = salveLi[key].innerText;
      objeto.push({ item: value, classe: salveLi[key].classList.value });
      localStorage.setItem('list', JSON.stringify(objeto));
    }
  });
}

// Requisito 13
// function trocar(posicao) {
//   const li1 = document.querySelectorAll('li');
//   for (let key = 0; key < li1.length; key += 1) {
//     li1[key].addEventListener('click', () => {
//       posicao.parentNode.insertBefore(posicao, li1[key].previousElementSibling);
//     });
//   }
// }

// function moveUpLi() {
//   const li = document.querySelectorAll('li');
//   for (let key = 0; key < li.length; key += 1) {
//     li[key].addEventListener('click', trocar(li[key]));
//   }
// }

// function moveUp() {
//   const buttonUp = document.querySelector('#mover-cima');
//   buttonUp.addEventListener('click', moveUpLi);
// }

// function moveDownLi() {
//   const li = document.querySelectorAll('li');
//   for (let key = 0; key < li.length; key += 1) {
//     li[key].addEventListener('click', () => {
//       li[key].parentNode.insertBefore(li[key].nextElementSibling, li[key]);
//     });
//   }
// }

// function moveDown() {
//   const buttonUp = document.querySelector('#mover-baixo');
//   buttonUp.addEventListener('click', moveDownLi);
// }

function addTaks() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', () => {
    const valueInpt = document.getElementById('texto-tarefa');
    const list = document.getElementById('lista-tarefas');
    const li = document.createElement('li');
    li.innerText = valueInpt.value;
    valueInpt.value = '';
    list.appendChild(li);
    localStorage.clear();
    listColor();
    taskComplete();
    salve();
    clean();
  });
}
addTaks();

function getLocalStorage() {
  const get = JSON.parse(localStorage.getItem('list'));
  if (get) {
    const list = document.getElementById('lista-tarefas');
    for (let key = 0; key < get.length; key += 1) {
      const li = document.createElement('li');
      li.className = get[key].classe;
      li.innerText = get[key].item;
      list.appendChild(li);
      taskComplete();
      listColor();
      finalizedClean();
    }
  }
}
getLocalStorage();
