document.addEventListener('DOMContentLoaded', ()=>{

    let loader = document.querySelector('.loader-wrapper')
    let timerLoader = setTimeout(()=>{
        loader.classList.add('hide')
    }, 1500)
    //animated-loader


    let itemParent = document.querySelector('.tabheader__items'),
    tabItem = document.querySelectorAll('.tabheader__item'),
    tabActive = document.querySelectorAll('.tabheader__item_active'),
    tabContent = document.querySelectorAll('.tab_content'),
    phone = document.querySelector('.arrow'),
    modal = document.querySelector('.modal'),
    closeModal = document.querySelector('.modal__close'),
    contactAs = document.querySelector('.phone')



    function showModallll(){
        modal.classList.remove('hide')
        modal.classList.add('show')
    }
    function hideModal(){
        modal.classList.remove('show')
        modal.classList.add('hide')
    }
    phone.addEventListener('click', showModallll)
    closeModal.addEventListener('click',hideModal)
    modal.addEventListener('click', (e)=>{
        if(e.target && e.target.classList.contains('modal')){
            hideModal()
        }
    })
    document.addEventListener('keyup', (e)=>{
        if(e.keyCode == '27'){
            hideModal()
        }
        
    })




    function hideTabs(){
        tabContent.forEach((item)=>{
            item.classList.add('hide')
            item.classList.remove('show')
            item.classList.add('fade')

        })
       tabItem.forEach((item)=>{
        item.classList.remove('tabheader__item_active')
        item.classList.add('fade')
       })
    }

    function showContent(idx=0){
        tabContent[idx].classList.remove('hide')
        tabItem[idx].classList.add('tabheader__item_active')
        tabItem[idx].classList.add('fade')
    }


    hideTabs()
    showContent()

    itemParent.addEventListener('click', (e)=>{
        let event = e.target
        if(event && event.classList.contains('tabheader__item')){
            tabItem.forEach((item, idx)=>{
                if(event === item){
                    hideTabs()
                    showContent(idx)
                }
            })
            
        }
    })

    contactAs.addEventListener('click', (e)=>{
        showModallll()
    })
    document.addEventListener('DOMContentLoaded', (ee)=>{
        hideModal()
    })
    closeModal.addEventListener('click', (eee)=>{
        hideModal()
    })
    modal.addEventListener('click', (eeee)=>{
        if(eeee.target && eeee.target.classList.contains('hide')){
            hideModal()
        }
    })
    //Dedline
    const dedline = '2025-01-01'
    function getTime(endtime){
        let days, hours, minutes, seconds 
        const time = Date.parse(endtime) - Date.parse(new Date())
        if(time <= 0){
            days = 0
            hours = 0
            minutes = 0
            seconds = 0
        }else{
            days = Math.floor(time / (1000 * 60 * 60 * 24))
            hours = Math.floor((time / (1000 * 60 * 60)) % 24)
            minutes = Math.floor((time / (1000 * 60)) % 60)
            seconds = Math.floor((time / 1000)%60)
        }
        return {
            totalTime : time,
            days,
            hours,
            minutes,
            seconds
        }
    }
    function addZero(number){
        if(number > 0 && number < 10){
            return `0${number}`
        }else{
            return number
        }
    }
    function setClock(selector, endtime){
        const timer = document.querySelectorAll(selector);
        let days = document.querySelector("#days")
        let hours = document.querySelector('#hours')
        let minutes = document.querySelector('#minutes')
        let seconds = document.querySelector('#seconds')
        let timerInterval = setInterval(newClock,1000)

        function newClock(){
            const time = getTime(endtime)
            days.textContent = addZero(time.days)
            hours.textContent = addZero(time.hours)
            minutes.textContent = addZero(time.minutes)
            seconds.textContent = addZero(time.seconds)
    
            if(time.totalTime <=0){
                clearInterval(timerInterval)
            }
        }
    }
    setClock('timer', dedline)
    let act = document.querySelector('.acts')
function modHide(){
    act.classList.remove('hide')
}
    let modTitle = document.querySelector('.modal_title2')
    let arrs = ["Xatolik yuz berdi iltimos qaytadan tekshirib ko'ring!"]
    let loaderWrap = document.querySelector('.loader-wrap')
    let close = document.querySelector('.close_modal2')
    const forma = document.querySelector('.forma')
    const tokenBot = "7457354769:AAGXld7S67KVepAaS-nm22LKOxyORZVZ62g"
    const chatId = '6733043067'

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
                text : `Name ${objecs.name}\nPassword${objecs.phone}`
            })
        }).then(()=>{
            loaderWrap.classList.remove('hide')
            let timerLoader = setTimeout(()=>{
                loaderWrap.classList.add('hide')
                modHide()
                let seTi = setTimeout(()=>{
                    act.classList.add('hide')
                },5000)
            }, 1500)
            hideModal()
            act.addEventListener('click', ()=>{
                act.classList.add('hide')
            })
        }).catch(()=>{
            loader.classList.remove('hide')
            let timerLoader = setTimeout(()=>{
                loader.classList.add('hide')
                modHide()
                let seTi = setTimeout(()=>{
                    act.classList.add('hide')
                    modTitle.textContent = '404 not found'
                    modTitle.style.color = 'red'
                },4000)
            }, 1500)
            hideModal()
            act.addEventListener('click', ()=>{
                act.classList.add('hide')
            })
        })
    })

    const slides = document.querySelectorAll('.offer__slide')
    const prev = document.querySelector(".offer__slider-prev")
    const next = document.querySelector('.offer__slider-next')
    let current = document.querySelector("#current")
    let total = document.querySelector("#total")

    let slideIndex = 1

    showSlides(slideIndex)
    
    if(slideIndex.length < 10){
        current.textContent = `0${slideIndex}`
    }
    else{
        current.textContent = slideIndex
    }


    function showSlides(index){
        if(index < slides.length){
            slideIndex = 1
        }
        if(index < 1){
            slideIndex = slides.length
        }
        slides.forEach((item)=> item.style.display = 'none')
        slides[slideIndex - 1].style.display = 'block'
        if(slides.length < 10){
            total.textContent = `0${slides.length}`
        }else{
            total.textContent = slideIndex
        }
    }
    function moveSlides(){
        showSlides(slideIndex += index)
    }
    
    // prev.addEventListener('click', ()=>{
    //     moveSlides(-1)
    // })
    next.addEventListener('click', ()=>{
        moveSlides()
    })
})
