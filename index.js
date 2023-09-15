let body = document.querySelector('body');
let colorName = document.querySelector('p');
let colorBtn = document.querySelector('.color-btn');

const hexLength = 6;
let validChars = '0123456789ABCDEF';

function randomInterval(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function getRandomColor(){
  let color = '#';
  for (let i = 0; i < hexLength; i++){
    let getRandomChar = validChars.charAt(randomInterval(0,15));
    color += getRandomChar;
  }
  colorName.innerHTML = color;
  body.style.backgroundColor = color;
}

getRandomColor();


colorBtn.addEventListener('click', function(){
  console.log('working');
  getRandomColor();
})

