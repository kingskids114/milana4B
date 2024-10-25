const plus = (a, b) => a + b
const minus = (a, b) => a - b
const umnojenie = (a, b) => a * b
const delenie = (a, b) => a / b

let oper = ''
let s = ''
document.querySelectorAll('button').forEach(el => {
    el.addEventListener('click', () => {
        if (el.innerHTML == '+' || el.innerHTML == '-' || el.innerHTML == '*' || el.innerHTML == '/') {
            oper = el.innerHTML
        }
        s = s + el.innerHTML
        document.getElementById('ekran').innerHTML = s
    })
})

document.getElementById('equal').addEventListener('click', () => {
    let numbers = s.replace('=', '').split(oper)

    if (oper == '+'&&numbers.length==2) {
        document.getElementById('ekran').innerHTML = plus(+numbers[0], +numbers[1])
    } else if (oper == '-'&&numbers.length==2) {
        document.getElementById('ekran').innerHTML = minus(+numbers[0], +numbers[1])
    } else if (oper == '*'&&numbers.length==2) {
        document.getElementById('ekran').innerHTML = umnojenie(+numbers[0], +numbers[1])
    } else if (oper == '/'&&numbers.length==2) {
        document.getElementById('ekran').innerHTML = delenie(+numbers[0], +numbers[1])
    } else {
        document.getElementById('ekran').innerHTML = "Правильно пишите задачу"
    }
})