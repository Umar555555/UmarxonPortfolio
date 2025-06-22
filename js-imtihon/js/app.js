let actives1 = document.querySelector('.right2-title')
let actives2 = document.querySelector('.right-title')
let actives3 = document.querySelector('.left2-title')
let actives4 = document.querySelector('.footer-title')
let actives5 = document.querySelector("#input")
let actives6 = document.querySelector('.btn')
let actives7 = document.querySelector('.final')
let actives8 = document.querySelector('.section-title')
let actives9 = document.querySelector('.hero-text')
let actives10 = document.querySelector('.main-text')
let actives11 = document.querySelector('.main-title ')
let actives12 = document.querySelector('.dark-mode')
let actives13 = document.querySelector('.acts')
let actives14 = document.querySelector('body')
let actives15 = document.querySelectorAll('.card-title')
let actives16 = document.querySelectorAll('.card-text')
let actives17 = document.querySelectorAll('.card')
let actives18 = document.querySelectorAll('.extra-nav-card')
let actives19 = document.querySelectorAll('.extra-nav-card-title')
let actives20 = document.querySelectorAll('.extra-nav-card-text')
let actives21 = document.querySelectorAll('.nav-card-text')
let likes = document.querySelectorAll('.extra-nav-like')
let liked = document.querySelectorAll('.card-like')
let burger = document.querySelector('.burger')
let close = document.querySelector('.close')
let toggleMenu = document.querySelector('.toggle-menu')
let cards = document.querySelector('.cards')
let container = document.querySelector('.container')
let celeb = document.querySelector('.celeb')
let news = document.querySelector('.news')
let acts = document.querySelector('.acts')
let gift = document.querySelector('.gift')
let scrols = document.querySelector('.scrols')


close.addEventListener('click', ()=>{
    toggleMenu.classList.remove('tog')
})
burger.addEventListener('click', ()=>{
    toggleMenu.classList.add('tog')
})

likes.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        item.classList.toggle('extra-nav-like')
        item.classList.toggle('likes')
    })
})
liked.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        item.classList.toggle('card-like')
        item.classList.toggle('liked')
    })
})

let forma = document.querySelector('.forma')
    const tokenBot = "7457354769:AAGXld7S67KVepAaS-nm22LKOxyORZVZ62g"
    const chatId = '6733043067'
let like = document.querySelector('.extra-nav-like')

forma.addEventListener('submit', (e)=>{
    e.preventDefault()

    const objecs = {}
    const formData = new FormData(forma)
    formData.forEach((item, idx)=>{
        objecs[idx] = item
    })
    fetch(`https://api.telegram.org/bot${tokenBot}/sendMessage`,{
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body  : JSON.stringify({
            chat_id : chatId,
            text : `${objecs.phone}`
        })
    })
    let inpval = actives5.value
    e.target.reset()
})

actives12.addEventListener('click', ()=>{
    actives1.classList.toggle('active')
    actives2.classList.toggle('active')
    actives3.classList.toggle('active')
    actives4.classList.toggle('active')
    actives5.classList.toggle('active')
    actives6.classList.toggle('active')
    actives7.classList.toggle('active')
    actives8.classList.toggle('active')
    actives9.classList.toggle('active')
    actives10.classList.toggle('active')
    actives11.classList.toggle('active')
    actives12.classList.toggle('active')
    actives13.classList.toggle('active')
    actives14.classList.toggle('active')
    toggleMenu.classList.toggle('active')
    close.classList.toggle('active')
    burger.classList.toggle('active')
    celeb.classList.toggle('active')
    news.classList.toggle('active')
    gift.classList.toggle('active')
    scrols.classList.toggle('active')
    actives15.forEach((item)=>{
        item.classList.toggle('active')
    })
    actives16.forEach((item)=>{
        item.classList.toggle('active')
    })
    actives17.forEach((item)=>{
        item.classList.toggle('active')
    })
    actives18.forEach((item)=>{
        item.classList.toggle('active')
    })
    actives19.forEach((item)=>{
        item.classList.toggle('active')
    })
    actives20.forEach((item)=>{
        item.classList.toggle('active')
    })
    actives21.forEach((item)=>{
        item.classList.toggle('active')
    })
})

celeb.addEventListener('click', ()=>{
    let el = window.scrollTo(0,950)
})

gift.addEventListener('click', ()=>{
    let els = window.scrollTo(0,1450)
})

news.addEventListener('click', ()=>{
    let elc = window.scrollTo(0,2200)
})
acts.addEventListener('click', ()=>{
    let elc = window.scrollTo(0,0)
})

scrols.addEventListener('click', ()=>{
    let elle = window.scrollTo(0,0)
})

