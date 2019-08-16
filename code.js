
const add = (a,b) => Number(a)+Number(b)
const substract = (a,b) => Number(a)-Number(b)
const multiply = (a,b)=> a*b
const divise = (a,b)=>  a/b
let buttons = document.querySelectorAll("button")
buttons.forEach(function(btn) {
    btn.addEventListener('click', () => {
        let value = document.getElementById("content").textContent 
        if (btn.getAttribute('id') != "reset" && btn.getAttribute('id') != "equals") {
            if (value == "0") document.getElementById("content").textContent = btn.textContent
            else {
                document.getElementById("content").textContent += btn.textContent
                }
            }
    })
})
function operate(operator, number1,number2) {
    switch (operator) {
        case '+':
            return add(number1, number2);
        case '-':
            return substract(number1, number2);
        case '×':
            return multiply(number1, number2);
        case "÷":
            return divise(number1, number2);
            break;
    }
}
function reset() {
    document.getElementById("content").textContent = "0"
}
let classified;
function calculate() {
    let operation = document.getElementById("content").textContent
    classified = operation.split(/[ ,]+/).filter(Boolean) 
    let result = 0;
    classified.forEach((elem) => {
        let current = operate(elem, classified[classified.indexOf(elem) - 1],classified[classified.indexOf(elem) + 1])
        if (elem == "×") {
            result += current;
            classified.splice(classified.indexOf(elem) - 1, 3, current)
        }
        if(elem == "÷") {
            console.log("Hey")
            result += current
            classified.splice(classified.indexOf(elem) - 1, 3, current)
        }
        if (elem == "+") {
            result += current;
            classified.splice(classified.indexOf(elem) - 1, 3, current)
        }
        if (elem == "-") {
            result += current;
            classified.splice(classified.indexOf(elem) - 1, 3, current)
        }
    })
    document.getElementById("content").textContent = result;
}
document.addEventListener('keydown', function(event) {
    let character = +String.fromCharCode(event.keyCode)
    if((/[-\+*/%]/).test(character)) {
        console.log(character)
        document.getElementById("content").textContent += character.toString()
    }
    else {
        document.getElementById("content").textContent =  document.getElementById("content").textContent
    }
});
function backspace() {
    classified.pop()
    document.getElementById("content").textContent = classified.join("")
}
function limitText(limitField, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);
    } 
}