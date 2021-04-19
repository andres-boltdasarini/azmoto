function getDomNodesBySelector(selector) {

/*   let del=[]
    for (let i = 0; i < document.querySelectorAll(selector).length; i++) {
        del.push(document.querySelectorAll(selector)[i])
    }
    return del*/
    return Array.from(document.querySelectorAll(selector))
}

console.log(getDomNodesBySelector('.price-value'));