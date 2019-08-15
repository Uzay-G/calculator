
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
            else document.getElementById("content").textContent += btn.textContent}
    })
})

function reset() {
    document.getElementById("content").textContent = "0"
}
function calculate() {
    let operation = document.getElementById("content").textContent
    let classified = operation.split(/[ ,]+/).filter(Boolean) 
    let result = 0;
    classified.forEach((elem) => {
        if (elem == "×") {
            let current = multiply( classified[classified.indexOf(elem) - 1], classified[classified.indexOf(elem) + 1])
            result += current
            classified.splice(classified.indexOf(elem) - 1, 3, current)
        }
        if(elem == "÷") {
            console.log("Hey")
            let current = divise( classified[classified.indexOf(elem) - 1], classified[classified.indexOf(elem) + 1])
            result += current
            classified.splice(classified.indexOf(elem) - 1, 3, current)
        }
        if (elem == "+") {
            let current = add(classified[classified.indexOf(elem) - 1], classified[classified.indexOf(elem) + 1])
            result += current;
            classified.splice(classified.indexOf(elem) - 1, 3, current)
        }
        if (elem == "-") {
            let current = substract(classified[classified.indexOf(elem) - 1], classified[classified.indexOf(elem) + 1])
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
    let splitten = document.getElementById("content").textContent.split("")
    splitten.pop()
    document.getElementById("content").textContent = splitten.join("")
}
function limitText(limitField, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);
    } 
}