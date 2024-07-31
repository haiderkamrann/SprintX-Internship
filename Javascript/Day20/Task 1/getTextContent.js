function getTextContent(className){

    let h3 = document.getElementsByClassName(className)

    let textContent = h3[0].innerHTML;
    return textContent;
}

// console.log(getTextContent(h3))

module.exports = getTextContent;