'use strict'
let warning = document.querySelector('.warning'),
mainText = document.querySelector('.main-text'),
formEmail = document.querySelector('.email-form'),
formPassword = document.querySelector('.password-form'),
formUser = document.querySelector('.user-form'),
formCheck = document.querySelector('.check-form'),
email = document.querySelector('.email'),
password = document.querySelector('.password'),
user = document.querySelector('.user'),
check = document.querySelector("#check"),
main = document.querySelector('.main'),
emailBtn = document.querySelector('.email-btn'),
passwordBtn = document.querySelector('.password-btn'),
userBtn = document.querySelector('.user-btn'),
endBtn = document.querySelector('.end-btn'),
form1 = document.querySelector('.forma-1'),
form2 = document.querySelector('.forma-2'),
form3 = document.querySelector('.forma-3'),
form4 = document.querySelector('.forma-4'),
container = document.querySelector('.container'),
see = document.querySelector('.see'),
seeNot = document.querySelector('.see-not'),
warEmail = document.querySelector('.war-email'),
emWar = ['Eamil is invalid or already token'],
arr = ["Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter." ],
regExPass = /^[a-z0-9]{8,}$/,
regExEm = /^[a-zA-Z0-9]{1,}@gmail.com$/,
warText = document.querySelector('.text'),
warText2 = document.querySelector('.text-2'),
warText3 = document.querySelector('.text-3'),
str = document.querySelectorAll('.str'),
succesItem = document.querySelectorAll('h2'),
redItem = document.querySelectorAll('h1'),
wrap1 = document.querySelector('.wrap-1'),
wrap2 = document.querySelector('.wrap-2'),
userReg = /^[a-zA-Z0-9]{4,}$/,
checkkk = document.querySelector('.checkbox'),
warUs = document.querySelector('.warning-us'),
arrs = ['W','e','l','c','o','m','e',' t','o',' G','i','t',' h','u','b',' !',' L','e','t','s',' b','e','g','i','n',' t','h','e',' a','d','v','e','n','t','u','r','e',' .']
mainText.textContent = 'Welcome to Github! Lets begin the adventure'
let inpTimeout = setTimeout(()=>{
    formEmail.classList.remove('hide')
    main.classList.add('act-1')
}, 3000)
form1.addEventListener('submit', (e)=>{
    e.preventDefault()
    let emValue = email.value
    if(emValue){
        if(regExEm.test(emValue)){
            container.classList.remove('container')
            container.classList.add('con-1')
            main.classList.remove('act-1')
            main.classList.add('act-2')
            formPassword.classList.remove('hide')
            emailBtn.classList.add('hide')
            passwordBtn.classList.remove('hide')
            warText.remove()
            str[0].classList.remove('str')
            str[0].classList.add('true')
        }
    }
})
email.addEventListener('keyup', (r)=>{
    if(regExEm.test(r.target.value)){
            emailBtn.style.color = 'green'
            emailBtn.style.border = '1px solid green'
            warText.remove()
        }else{
            emailBtn.classList.remove('succes-pas')
            emailBtn.classList.add('act')
            warText.textContent = emWar
        }

    })
    
    
password.addEventListener('keyup', (w)=>{
    if(regExPass.test(w.target.value)){
    passwordBtn.classList.add('succes-pas')
    passwordBtn.classList.remove('act')
    warText3.textContent = 'Password is strong'
    warText3.style.color = 'green'
    warText3.style.marginLeft = '-450px'
    succesItem.forEach((item)=>{
        item.setAttribute('class', 'succes-item')
        item.style.marginTop = '-30px'
    })
    redItem.forEach((it)=>{
        it.setAttribute('class', 'hide')
    })
}else{
    passwordBtn.classList.remove('succes-pas')
    passwordBtn.classList.add('act')
    warText3.textContent = 'Password is too short'
    warText3.style.color = 'red'
    warning.textContent = arr
    warText3.style.marginLeft = '-420px'
    succesItem.forEach((item)=>{
        item.setAttribute('class', 'hide')
    })
    redItem[0].setAttribute('class', 'items')
    redItem[1].setAttribute('class', 'actives')
    redItem[2].setAttribute('class', 'actives')
}
})
form2.addEventListener('submit', (e)=>{
    e.preventDefault()
     let pasValue = password.value
            if(regExPass.test(pasValue)){
                container.classList.remove('con-1')
                container.classList.add('con-2')
                main.classList.remove('act-2')
                main.classList.add('act-3')
                formUser.classList.remove('hide')
                userBtn.classList.remove('hide')
                passwordBtn.classList.add('hide')
                str[1].classList.remove('str')
                str[1].classList.add('true')
                warText3.remove()
                warning.remove()
                succesItem.forEach((itemss)=>{
                    itemss.style.display = 'none'
            })
            redItem.forEach((itema)=>{
                itema.style.display = 'none'
            })
            warUs.classList.remove('hide')
        }
})



function eyeFunction(){
    see.addEventListener('click', ()=>{
        see.classList.toggle('see-not')
        see.classList.add('see')
    })
}


form3.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(userReg.test(user.value)){
        container.classList.remove('con-2')
        container.classList.add('con-3')
        main.classList.remove('act-3')
        main.classList.add('act-4')
        formCheck.classList.remove('hide')
        endBtn.classList.remove('hide')
        userBtn.classList.add('hide')
        str[2].classList.remove('str')
        str[2].classList.add('true')
        warUs.remove()
        
    }
})
user.addEventListener('keyup', (s)=>{
    if(userReg.test(s.target.value)){
        userBtn.classList.add('succes-pas')
        userBtn.classList.remove('act')
        warUs.textContent = `${s.target.value} is available`
    }else{
        warUs.textContent = `Username ${s.target.value} is not available.`
        userBtn.classList.remove('succes-pas')
        userBtn.classList.add('act')
    }
})
checkkk.addEventListener('click', ()=>{
    checkkk.classList.toggle('activeee')
})




eyeFunction()