const open = document.querySelector(".open");
const model = document.querySelector('.model');
const close = document.querySelector('.close');
open.addEventListener('click',()=>{
    model.classList.add('show_model')
})
close.addEventListener('click',()=>{
    model.classList.remove('show_model');
})