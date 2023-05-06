export let h = (text,children=[],options) => {
    //TODO improve parsing
    let name = text.split(" ")[0]
    let attributes = text.split(" ").slice(1);

    /**@type {HTMLElement} */
    var el = document.createElement(name,options);
    children.forEach(child=>{
        if(typeof child === "object") el.appendChild(child)
        else el.innerHTML = child
    });
    attributes.forEach(attribute => {
        el.setAttribute(attribute.split("=")[0],attribute.split("=")[1])
    })

    return el
};

export let renderChildren = (children) => {
    var clonedChildren = []
    children.forEach(item => clonedChildren.push(item.cloneNode(true)))
    return clonedChildren;
}