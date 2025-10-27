const num = document.querySelectorAll('.num')
const opr = document.querySelectorAll('.operate')
const display = document.querySelector('.screen')
const clear = document.querySelector('#all-clear')
const del = document.querySelector('#clear')
const eqs = document.querySelector('#equal')
const perct = document.querySelector("#perct")
const chng = document.querySelector("#transform")
const dec = document.querySelector('#point')

let operand1 = 0
let operand2 = 0
let res = 0
let operator = ''
let flag = false
let count =  false

display.style.textAlign = 'right';

for(let i = 0; i<num.length; i++) {
    num[i].addEventListener('click',() => {
        console.log(num[i].innerHTML);
        display.value += num[i].innerHTML
    })
}


for(let i = 0; i<opr.length; i++) {
    opr[i].addEventListener('click',() => {
        count = false
        operand1 = Number(display.value)
        operator = opr[i].innerHTML
        display.value = ''
        
    })
}

function remove() {
    display.value = ""
}

function deleted() {
    if(!isFinite(res)) display.value = ""
    display.value = display.value.slice(0,display.value.length-1)
}


clear.addEventListener('click', remove)
del.addEventListener('click', deleted)
eqs.addEventListener('click', () => {
    operand2 = Number(display.value)
    console.log(operand1 + " " + operator + " " + operand2);



    if (operator === "+") {
        res = operand1 + operand2
        display.value = res
        operand1 = res
        operand2 = 0
    }
    else if(operator === "-") {
        res = operand1 - operand2
        display.value = res
        operand1 = res
        operand2 = 0
    }
    else if(operator === "X") {
        res = operand1 * operand2
        display.value = res
        operand1 = res
        operand2 = 0
    }
    else {
        res = operand1 / operand2
        display.value = res
        operand1 = res
        operand2 = 0
    }

})
perct.addEventListener('click', () => {
    operand1 = Number(display.value)
    display.value = operand1 / 100
})

chng.addEventListener('click', () => {
    operand1 = Number(display.value)
    if(flag === false) {
        display.value = -operand1
        flag = true
    } else {
        display.value = operand1
        flag = false
    }
    
})

dec.addEventListener('click', () => {
    if(count === false) {
        display.value += '.'
        count = true
    }
})

