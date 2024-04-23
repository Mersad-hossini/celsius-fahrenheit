let $ = document

// Input,C and F Word
let inputConverter = $.getElementById("converter")
let C_convert = $.getElementById("C")
let F_convert = $.getElementById("F")

// Button
let changeButton = $.getElementById("changeButton")
let resetButton = $.getElementById("resetButton")
let convertButton = $.getElementById("convertButton")

// Final Result
let result = $.getElementById("resultId")

// =====================================================

// FALSE OR TRUE FLAG

let changeFlag = true

// function for (change button , reset button , convert button)

function change() {
    if(changeFlag) {
        inputConverter.value = ""
        result.innerHTML = ""    
        C_convert.innerHTML = "°F"
        F_convert.innerHTML = "°C"
        inputConverter.setAttribute("placeholder" , "°F")
        $.title = "SalzLearn| Js | °F to °C"
        changeFlag = false
    } else {
        inputConverter.value = ""
        result.innerHTML = ""
        F_convert.innerHTML = "°F"
        C_convert.innerHTML = "°C"
        inputConverter.setAttribute("placeholder" , "°C")
        $.title = "SalzLearn| Js | °C to °F"
        changeFlag = true
    }
}

function reset() {
    inputConverter.value = ""
    result.innerHTML = ""
}

function convert() {
    if(changeFlag) {
        if(inputConverter.value === "" || isNaN(inputConverter.value)) {
            result.innerHTML = "Please Enter a number"
            result.style.color = "red"
        } else {
            let c_changeTo_F = inputConverter.value
            let f_result = (c_changeTo_F * 9/5) + 32
            result.innerHTML = `${c_changeTo_F}°C = ${f_result.toFixed(2)}°F`
            result.style.color = "rgb(255, 255, 102)"
        }
    } else {
        if(inputConverter.value === "" || isNaN(inputConverter.value)) {
            result.innerHTML = "Please Enter a number"
        } else {
            let f_changeTo_c = inputConverter.value
            let c_result = (f_changeTo_c - 32) * 5/9
            result.innerHTML = `${f_changeTo_c}°F = ${c_result.toFixed(2)}°C`
        }
    }
}

// Add Event Listener
changeButton.addEventListener("click" , change)
resetButton.addEventListener("click" , reset)
convertButton.addEventListener("click" , convert)