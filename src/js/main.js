import {insertButtons, updateBtnString} from "./ui.js"


const sqrt = '\u221A'
const pi = '\u03C0'
const e = '\u0065'
const KEYS = `( ) mc m+ m- mr RM +/- % ÷ 2^nd x^2 x^3 x^y ${e}^x 10^x 7 8 9 × 1/x 2#x 3#x y#x ln log_10 4 5 6 - x! sin cos tan ${e} EE 1 2 3 + s sinh cosh tanh ${pi} Rad Rand 0 , =`
const BUTTONS = []
const RESULT = document.querySelector(".result");


insertButtons(KEYS, document.querySelector(".buttons"), BUTTONS)
BUTTONS.forEach((btn) => updateBtnString(btn))





class Calculator {
    /**
     * handle our systems that is the calculator
     * @param {HTMLElement} calculator
     */
    constructor(calculator) {
        this.calculator = calculator
        this.result = calculator.querySelector(".result")
        this.all_buttons = calculator.querySelectorAll(".buttons button")
        this.operator = "× ÷ - + ln".split(" ")
        this.container = "( ) [ ]".split(" ")
        this.all_buttons.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                this.addValue(btn)
            })
        })
    }
    addValue(button){
        let type = ""
        if (this.operator.includes(button.textContent))
            type = "operator"

        if (this.container.includes(button.textContent))
            type = "conteneur"

        this.result.innerHTML += `<span class="item ${type}">${button.innerHTML}</span>`
        console.log(this.result)
    }
    egal(){

    }
}

const calc = new Calculator(document.querySelector(".card"))
calc.egal()