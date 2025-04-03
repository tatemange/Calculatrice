import {insertButtons, changeContent} from "./ui.js"


const sqrt = '\u221A'
const pi = '\u03C0'
const e = '\u0065'
const KEYS = `( ) mc m+ m- mr RM +/- % ÷ 2^nd x^2 x^3 x^y ${e}^x 10^x 7 8 9 × 1/x 2#x 3#x y#x ln log_10 4 5 6 - x! sin cos tan ${e} EE 1 2 3 + s sinh cosh tanh ${pi} Rad Rand 0 , =`
const BUTTONS = []
const RESULT = document.querySelector(".result");


insertButtons(KEYS, document.querySelector(".buttons"), BUTTONS)
BUTTONS.forEach((btn) => changeContent(btn))