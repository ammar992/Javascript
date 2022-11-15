const nav_links = document.querySelector('.nav_links');
const burger = document.querySelector('.burger');



burger.addEventListener('click',()=>{
if(nav_links.classList.contains('active')){
    nav_links.classList.remove('active');
}
else{
    nav_links.classList.add('active')
}
}) 