
// const OPERATEUR_AND_SIGNE = "÷ C × ±  − % . = +"

const sqrt = '\u221A'
const pi = '\u03C0'
const e = '\u0065'

const KEYS = `( ) mc m+ m- mr RM +/- % ÷ 2^nd x^2 x^3 x^y ${e}^x 10^x 7 8 9 × 1/x 2Rx 3Rx yRx ln log_10 4 5 6 - x! sin cos tan ${e} EE 1 2 3 + s sinh cosh tanh ${pi} Rad Rand 0 , =`


const BUTTONS = []

function createHtmlElt(tagName, attrs = {}) {
    const elt = document.createElement(tagName)
    for (let [key, value] of Object.entries(attrs)) {
        if (key.toLowerCase() === "text") elt.textContent = value
        if (key.toLowerCase() === "html") elt.innerHTML = value
        else elt.setAttribute(key, value)
    }
    return elt
}


/**
 * @param {string} string
 * @param {HTMLElement} parent
 */
function insertButtons(string, parent) {
    const all_button = string.split(' ');
    all_button.forEach((str) => {
        let cls = 'pro'
        if (string.split(' ').includes(str))
            cls = 'light'
        let button = createHtmlElt('button', { html: str, 'class': `b${str} ${cls} btn` })
        parent.appendChild(button)
        BUTTONS.push(button)
    })

    setStyle([...parent.children], 10, 9)
}

insertButtons(KEYS, document.querySelector(".buttons"))

/**
 * 
 * @param {Array<HTMLElement>} array 
 * @param {Number} nbCol 
 * @param {Number} moins 
 */
function setStyle(array, nbCol, moins) {
    array.forEach((btn, i) => {
        if ((i % nbCol) - moins === 0)
            btn.classList.add("operator")
        for (let j = 1; j < 4; j++) {
            if ((i % nbCol) - moins + j === 0) {
                btn.classList.add("number")
                if (!["RM", "+/-", "Rand", "%"].includes(btn.textContent))
                    btn.classList.add('font-size-xxl')
                else {
                    if (btn.textContent !== "Rand")
                        btn.classList.add('up-btn')
                    else btn.classList.add("rand")
                }
            }
        }
    })
}


function modified(button) {
    let content = button.textContent
    let start, end;

    if (content.includes("^")) {
        start = content.split('^')[0]
        end = content.split('^')[1]
        button.innerHTML = `${start}<sup class='sup'>${end}</sup>`
    }
    if (content.includes("_")) {
        start = content.split('_')[0]
        end = content.split('_')[1]
        button.innerHTML = `${start}<sub class='sub'>${end}</sub>`
    }
    if (content.includes("R")) {
        if (!["RM", "Rand", "Rad"].includes(content)) {
            start = content.split('R')[0]
            end = content.split('R')[1]
            button.innerHTML = `<sup class='sup'>${start}</sup>${sqrt}<span class='sub-1'>${end}</span>`
        }
    }
    if (content.includes("e")) {
        start = content.split("e")[0]
        end = content.split("e")[1].replace("^", "")        
        button.innerHTML = `${start}<i>e</i> <sup class='sup'>${end}</sup>`
    }
}

BUTTONS.forEach((btn) => modified(btn))