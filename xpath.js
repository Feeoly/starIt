function isElement(node) {
    return node instanceof HTMLElement
}

/**
 * refs: https://stackoverflow.com/questions/2631820/how-do-i-ensure-saved-click-coordinates-can-be-reloaed-to-the-same-place-even-i/2631931#2631931
 */
function getXpath(element) {
    if (!isElement(element)){
        return 
    }
    const bodyNode = document.body
    if (element === bodyNode) {
        return element.tagName
    }
    const parentNode = element.parentNode
    const childNodes = parentNode.childNodes
    let count = 0
    for (let i = 0; i <= childNodes.length; i++) {
        const node = childNodes[i]
        if (node.nodeType === 1 && node.tagName === element.tagName) {
            count++
        }
        if (node === element) {
            return `${getXpath(parentNode)}/${element.tagName}[${count+1}]`
        }
    }
}