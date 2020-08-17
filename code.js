let operation;
let classified;
const add = (a,b) => Number(a)+Number(b)
const subtract = (a,b) => Number(a)-Number(b)
const multiply = (a,b)=> a*b
const divide = (a,b)=>  a/b
function operate(operator, number1,number2) {
    switch (operator) {
        case '+':
            return add(number1, number2);
        case '-':
            return subtract(number1, number2);
        case '*':
            return multiply(number1, number2);
        case "/":
            return divide(number1, number2);
            break;
    }
}
/* Reset calculator */
function reset() {
    document.getElementById("content").textContent = "0"
}
/* Parse calculation -> analyse operator, operate accordingly and
 replace that content with the result*/
function calculate() {
    operation = document.getElementById("content").textContent
    classified = operation.split(/[ ,]+/).filter(Boolean) 
    let result = 0;
    classified.forEach((elem) => {
        let current = operate(elem, classified[classified.indexOf(elem) - 1],classified[classified.indexOf(elem) + 1])
        if (elem == "*") {
            result += current;
            classified.splice(classified.indexOf(elem) - 1, 3, current)
        }
        if(elem == "/") {
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
/* Remove last entry */
function backspace() {
    splitten = document.getElementById("content").textContent.split("")
    splitten.pop()
    document.getElementById("content").textContent = splitten.join("")
    
}
document.addEventListener('keydown', function(event) {
    let character = event.key
    if (document.getElementById("content").textContent.length > 24) document.getElementById("warning").style.display = "block"
    else if ((/[0-9+\-*/.]/).test(character)) {
        if (document.getElementById("content").textContent == "0")  document.getElementById("content").textContent = character.toString() 
        else {
            if ((/[+\-*/.]/).test(character)) document.getElementById("content").textContent += " " + character.toString() + " "
            else {
                if (document.getElementById("content").textContent.split(/[ ,]+/).filter(Boolean).length > 2) calculate()
                document.getElementById("content").textContent += character.toString()
                document.getElementById("warning").style.display = "none"
        }
    }
    }
    else if (event.key == "=") calculate()

});
// Parse Button clicks
let buttons = document.querySelectorAll("button")
buttons.forEach(function(btn) {
    btn.addEventListener('click', () => {
        let value = document.getElementById("content").textContent 
        if (btn.getAttribute('id') != "reset" && btn.getAttribute('id') != "equals") {
            if (value == "0") document.getElementById("content").textContent = btn.textContent
            else {
                if (value.length > 24) document.getElementById("warning").style.display = "block"
                // Needs to be rendered more efficient
                else {
                    document.getElementById("content").textContent += btn.textContent
                    if (document.getElementById("content").textContent.split(/[ ,]+/).filter(Boolean).length > 3) {
                        calculate()
                        document.getElementById("content").textContent += btn.textContent   
                    }
                    document.getElementById("warning").style.display = "none"
                }
                }
            }
    })
})
