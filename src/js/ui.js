


export function createHtmlElt(tagName, attrs = {}) {
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
 * @param {Array<HTMLElement>} array
 */
export function insertButtons(string, parent, array) {
    const all_button = string.split(' ');
    all_button.forEach((str) => {
        let cls = 'pro'
        if (string.split(' ').includes(str))
            cls = 'light'
        let button = createHtmlElt('button', { html: str, 'class': `b${str} ${cls} btn` })
        parent.appendChild(button)
        array.push(button)
    })

    setStyle([...parent.children], 10, 9)
}


/**
 *
 * @param {Array<HTMLElement>} array
 * @param {Number} nbCol
 * @param {Number} moins
 */
export function setStyle(array, nbCol, moins) {
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


/**
 * @param {HTMLElement} elt
 */
export function changeContent(elt){
    let content = elt.textContent
    if(content.includes("^")){
        content = content.split("^")
        content = content[0] + `<sup class='sup'>${content[1]}</sup>`
    }
    if(content.includes("#")){
        content = content.split("#")
        content = `<sup class="sup">${content[0]}</sup>` + '\u221A' + `<sub class='su'>${content[1]}</sub>`
    }

    elt.innerHTML = content
}

