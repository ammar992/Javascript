const colors = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn = document.querySelector('.btn');
const color = document.querySelector('.color');


btn.addEventListener('click',()=>{
    let hexColor = '#';
    for(var i=0;i<6;i++){
        hexColor += colors[getRandomNumber()];

        console.log(hexColor)
        document.body.style.backgroundColor = hexColor;
        color.textContent = hexColor;
    }
})

function getRandomNumber(){
   return Math.floor(Math.random()*colors.length);
}
