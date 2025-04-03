

import {createHtmlElt} from "./ui.js";


export function plus_ou_moins(parent) {
    if(parent.textContent === "") return
    if(parent.children[0].textContent[0] === "-"){
        parent.children[0].textContent = parent.children[0].textContent.replace("-", "+")
        return
    }
    if(parent.children[0].textContent[0] === "+"){
        parent.children[0].textContent = parent.children[0].textContent.replace("+", "-")
        return
    }
    const span = createHtmlElt("span", {text: "-", "class": "one"})
    parent.prepend(span)
}