const getColors = document.querySelectorAll('.color');
let getPixels = document.querySelectorAll('.pixel')

for (let index = 0; index < getPixels.length; index += 1) {
  getPixels[index].style.backgroundColor = 'white';
}

for (let index = 0; index < getColors.length; index += 1) {

  getColors[index].addEventListener('click', function() {

    if (getColors[index].className !== 'selected') {
      for (let index = 0; index < getColors.length; index += 1) {
        getColors[index].classList.remove('selected');
      };
    };

    getColors[index].classList.add('selected')

    for (let pixel = 0; pixel < getPixels.length; pixel += 1) {
      getPixels[pixel].addEventListener('click', function() {
        getPixels[pixel].style.backgroundColor = getColors[index].style.backgroundColor
      })
    }

  });

};
