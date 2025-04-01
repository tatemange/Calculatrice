

const KEYS = "7 8 9 ÷ C 4 5 6 × ± 1 2 3 − % 0 . = +"
let FN_KEYS = "cos sin tan √ ln log π abs mod ( ) !"


function createHtmlElt(tagName, attrs={}) {
    const elt = document.createElement(tagName)
    for (let [key, value] of Object.entries(attrs)) {
        if(key.toLowerCase() === "text") elt.textContent = value
        else elt.setAttribute(key, value)
    }
    return elt
}


/**
 * @param {string} string
 * @param {HTMLElement} parent
 */
function insertButtons(string, parent){
    const all_button = string.split(' ');
    all_button.forEach((str) => {
        let cls = 'pro'
        if (string.split(' ').includes(str))
            cls = 'light'
        let button = createHtmlElt('button', {text: str, 'class': `b${str} ${cls} btn`})
        parent.appendChild(button)
    })
}

insertButtons(FN_KEYS, document.querySelector(".buttons"))
insertButtons(KEYS, document.querySelector(".buttons"))

class Calculator {
    /**
     * @param {HTMLElement} calc
     */
    constructor(calc) {
        this.calc = calc;
    }

}