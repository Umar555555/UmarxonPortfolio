'use strict'

document.addEventListener('DOMContentLoaded', ()=>{

let aboutModal = document.querySelector('.about_span')
let aboutModalBtn = document.querySelector('.about_modal_btn')
let modal = document.querySelector('.modal')
let modalSpan = document.querySelector('.modal_span')
let lets = document.querySelector('.lets')
let letsTitle = document.querySelector('.back_home')
let myp = document.querySelector('.my_projects')
let l1 = document.querySelector('.l_1')
let l2 = document.querySelector('.l_2')
let l3 = document.querySelector('.l_3')
let l4 = document.querySelector('.l_4')
let l5 = document.querySelector('.l_5')
let ll1 = document.querySelector('.ll_1')
let ll2 = document.querySelector('.ll_2')
let ll3 = document.querySelector('.ll_3')
let ll4 = document.querySelector('.ll_4')
let ll5 = document.querySelector('.ll_5')
let l7 = document.querySelector('.l_7')
let l8 = document.querySelector('.l_8')
let l9 = document.querySelector('.l_9')
let l10 = document.querySelector('.l_10')
let l11 = document.querySelector('.l_11')
let l6 = document.querySelector('.l_6')
let ll6 = document.querySelector('.ll_6')
let contactBtn = document.querySelector('.contact_btn')

contactBtn.addEventListener('click', ()=>{
    lets.classList.remove('hide')
})
aboutModal.addEventListener('click', ()=>{
    modal.classList.remove('m_act')
})
modalSpan.addEventListener('click', ()=>{
    modal.classList.add('m_act')
})
aboutModalBtn.addEventListener('click', ()=>{
    modal.classList.remove('m_act')
})
letsTitle.addEventListener('click', ()=>{
    lets.classList.add('hidee')
})
myp.addEventListener('click', ()=>{
    lets.classList.remove('hidee')
})
l1.addEventListener('click', ()=>{
    window.scroll(0,0)
})
l2.addEventListener('click', ()=>{
    window.scroll(0,350)
})
l3.addEventListener('click', ()=>{
    let scw = window.scrollTo(0,890)
})
l4.addEventListener('click', ()=>{
    let scw = window.scrollTo(0,1430)
})
l5.addEventListener('click', ()=>{
    let scw = window.scrollTo(0,1995)
})
l6.addEventListener('click', ()=>{
    let scw = window.scrollTo(0,2350)
})
ll1.addEventListener('click', ()=>{
    window.scroll(0,0)
    headerull.classList.add('tops')
})
ll2.addEventListener('click', ()=>{
    window.scroll(0,250)
    headerull.classList.add('tops')
})
ll3.addEventListener('click', ()=>{
    let scw = window.scrollTo(0,950)
    headerull.classList.add('tops')
})
ll4.addEventListener('click', ()=>{
    let scw = window.scrollTo(0,1800)
    headerull.classList.add('tops')
})
ll5.addEventListener('click', ()=>{
    let scw = window.scrollTo(0,2380)
    headerull.classList.add('tops')
})
ll6.addEventListener('click', ()=>{
    let scw = window.scrollTo(0,2650)
    headerull.classList.add('tops')
})
l7.addEventListener('click', ()=>{
    let scw = window.scrollTo(0,0)
})
l8.addEventListener('click', ()=>{
    let scw = window.scrollTo(0,350)
})
l9.addEventListener('click', ()=>{
    let scw = window.scrollTo(0,890)
})
l10.addEventListener('click', ()=>{
    let scw = window.scrollTo(0,1430)
})
l11.addEventListener('click', ()=>{
    let scw = window.scrollTo(0,1995)
})


document.getElementById("commentForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const comment = document.getElementById("comment").value.trim();
    if (name && comment) {
        const newCard = document.createElement("div");
        newCard.classList.add("extra_card");
        const commentContainer = document.createElement("div");
        commentContainer.classList.add("coments");
        const commentItem = document.createElement("div");
        commentItem.classList.add("comment-item");
        commentItem.innerHTML = `<strong class="sal">${name} : </strong> <br> <p class="ppp">${comment}</p>`;
        commentContainer.appendChild(commentItem);
        newCard.appendChild(commentContainer);
        document.querySelector(".extra_cards").appendChild(newCard);
        document.getElementById("name").value = "";
        document.getElementById("comment").value = "";
    }
});

let x = document.querySelector('.x')
let my = document.querySelector('.my')
let serviceBtn = document.querySelector('.service_btn')

x.addEventListener('click', ()=>{
    my.classList.add('tops')
})
serviceBtn.addEventListener('click', ()=>{
    my.classList.remove('tops')
})

let burger = document.querySelector('.burger')
let headerull = document.querySelector('.header_ull')
let tope = document.querySelector('.tope')
tope.addEventListener('click', ()=>{
    headerull.classList.add('tops')
})
burger.addEventListener('click', ()=>{
    headerull.classList.remove('tops')
})
})






