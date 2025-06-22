window.addEventListener('DOMContentLoaded', ()=>{
    window.scrollTo(0,0)
    let modalBtn = document.querySelector('.modal_btn'),
    btn = document.querySelector('.btn'),
    modal = document.querySelector('.modal'),
    aboutBtn = document.querySelector('#about_btn'),
    menu = document.querySelector('.menu_icon'),
    nav = document.querySelector('.navbar')
    
    modalBtn.addEventListener('click', ()=>{
        modal.classList.add('hide')
    })
    btn.addEventListener('click', ()=>{
        modal.classList.remove('hide')
    })
    aboutBtn.addEventListener('click', ()=>{
        modal.classList.remove('hide')
    })
    menu.addEventListener('click', ()=>{
        nav.classList.toggle('active')
    })
    let alink = document.querySelectorAll('.header_link')
    for(let i = 0; i < alink.length; i++){
    alink[i].addEventListener('click', ()=>{
        alink.forEach((item)=>{
            item.classList.remove('active')
            alink[i].classList.add('active')
        })
    })
    }

    window.addEventListener('scroll', () => {
        let reveals = document.querySelectorAll('.reveal')
    
        for(let i = 0; i< reveals.length; i++) {
          let windowHeight = window.innerHeight;
          let revealTop = reveals[i].getBoundingClientRect().top;
          let revealPoint = 50;
    
          if(revealTop < windowHeight - revealPoint) {
              reveals[i].classList.add('active')
            }
        }
    })
})
