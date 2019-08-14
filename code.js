let value = document.getElementById("content").textContent 
const add = (a,b) => a+b
const substract = (a,b) => a-b
const multiply = (a,b)=> a*b
const divise = (a,b)=>  a/b
let buttons = document.querySelectorAll("button")
buttons.forEach(function(btn) {
    btn.addEventListener('click', () => {
        if (btn.getAttribute('id') != "reset" && btn.getAttribute('id') != "equals") {
            document.getElementById("content").textContent += btn.textContent
        }
    })
})
function operate(operator, number1, number2) {
    if (operator == "+") {return add(number1, number2)}
    if (operator == "-") {return substract(number1, number2)}
    if (operator == "*") {return multiply(number1, number2)}
    if (operator == "/") {return divide(number1, number2)}
}
function reset() {
    document.getElementById("content").textContent = ""
}