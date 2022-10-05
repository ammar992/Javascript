const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_link');
    

    burger.addEventListener('click',()=>{
        nav.classList.toggle('active');
        burger.classList.toggle('toggle')
    })

  
}

navSlide();